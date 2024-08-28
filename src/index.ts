// import express, { Request, Response } from 'express';
// import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';
// import cors from 'cors';

// Carregar variáveis de ambiente do arquivo .env
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// Configuração do Nodemailer
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: parseInt(process.env.EMAIL_PORT as string, 10),
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// Endpoint para enviar email
// app.post('/send-email', async (req: Request, res: Response) => {
//   const { name, email, phone, serviceCategory } = req.body;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: ['diegoreisnacif@gmail.com', 'sofiilnk646@gmail.com'], // Lista de destinatários
//     subject: 'Novo Formulário de Orçamento Enviado',
//     html: `
//       <h3>Um novo formulário de orçamento foi enviado</h3>
//       <p><strong>Nome:</strong> ${name}</p>
//       <p><strong>Telefone:</strong> ${phone}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Tipo de serviço:</strong> ${serviceCategory}</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Email enviado com sucesso!');
//   } catch (error) {
//     console.error('Erro ao enviar o email:', error);
//     res.status(500).send('Erro ao enviar o email');
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });
