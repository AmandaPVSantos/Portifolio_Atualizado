// alert("Está funcionando!")

function navigateToPage(page) {
    window.location.href = page;
}

// Contato
// Capturar os dados do formulário
const formData = {
    nome: document.getElementById('floatingNome').value,
    email: document.getElementById('floatingEmail').value,
    mensagem: document.getElementById('exampleFormControlTextarea1').value
};

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
