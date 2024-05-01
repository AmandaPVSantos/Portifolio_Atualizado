import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors'; // Importe o pacote cors

const app = express();
const port = process.env.PORT || 3000; // Porta do servidor

// Middleware para lidar com dados JSON
app.use(express.json());
app.use(cors()); // Use o middleware de CORS

// Rota para receber dados do formulário e enviar e-mail
app.post('/enviar-email', (req, res) => {
    // Extrair os dados do formulário do corpo da solicitação
    const { nome, email, mensagem } = req.body;

    // Configurar o transporte de e-mail usando Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'amandasantosdev859@gmail.com',
            pass: '&pshn$u8BU'
        }
    });

    // Definir o corpo do e-mail
    let mailOptions = {
        from: email,
        to: 'amandasantosdev859@gmail.com',
        subject: 'Novo contato recebido',
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    };

    // Enviar e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            res.status(500).send('Erro ao enviar e-mail.');
        } else {
            console.log('E-mail enviado:', info.response);
            res.status(200).send('E-mail enviado com sucesso!');
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
