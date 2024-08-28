import { VercelRequest, VercelResponse } from '@vercel/node';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT as string, 10),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function sendEmail(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, serviceCategory } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
    to: [String(process.env.DEST_EMAIL_1), String(process.env.DEST_EMAIL_2)], // Lista de destinatários
    subject: 'Novo Formulário de Orçamento Enviado',
    html: `
      <h3>Um novo formulário de orçamento foi enviado</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tipo de serviço:</strong> ${serviceCategory}</p>
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o email:', error);
      res.status(500).send('Erro ao enviar o email');
    }
  } else {
    res.status(405).send('Método não permitido');
  }
}
