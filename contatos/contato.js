document.getElementById('botao-padrao-enviar').addEventListener('click', async function(event) {
    event.preventDefault(); // Evita o comportamento padrão do botão (submit do formulário)
    
    // Coleta os dados do formulário
    const nome = document.getElementById('floatingNome').value;
    const email = document.getElementById('floatingEmail').value;
    const telefone = document.getElementById('floatingTelefone').value;
    const preferenciaContato = document.getElementById('option').value;
    const mensagem = document.getElementById('exampleFormControlTextarea1').value;

    // Envia os dados para o servidor
    try {
        const response = await fetch('/enviar-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                email,
                telefone,
                preferenciaContato,
                mensagem
            })
        });

        if (response.ok) {
            // Se a resposta do servidor for bem-sucedida, exibe a mensagem de sucesso
            alert('Mensagem enviada com sucesso!');
        } else {
            // Se a resposta do servidor não for bem-sucedida, exibe a mensagem de erro
            alert('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
        }
    } catch (error) {
        // Se ocorrer um erro durante o envio da solicitação, exibe a mensagem de erro
        console.error('Erro ao enviar a solicitação:', error);
        alert('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
    }
});


// Enviar os dados do formulário para o backend
fetch('/enviar-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => {
    if (response.ok) {
        // Sucesso - fazer algo, como mostrar uma mensagem para o usuário
        console.log('E-mail enviado com sucesso!');
    } else {
        // Se houver um erro no envio do e-mail
        console.error('Erro ao enviar e-mail.');
    }
})
.catch(error => {
    // Se houver um erro na solicitação fetch
    console.error('Erro na solicitação fetch:', error);
});