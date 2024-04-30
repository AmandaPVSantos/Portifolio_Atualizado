app.post('/enviar-email', (req, res) => {
    // Extrair os dados do formulário do corpo da solicitação
    const { nome, email, telefone, preferenciaContato, mensagem } = req.body;

    // Configurar o transporte de e-mail usando Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'amandasantosdev859@gmail.com',
            pass: ''
        }
    });

    // Definir o corpo do e-mail
    let mailOptions = {
        from: email,
        to: 'amandasantosdev859@gmail.com',
        subject: 'Novo contato recebido',
        text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nPreferência de contato: ${preferenciaContato}\nMensagem: ${mensagem}`
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
