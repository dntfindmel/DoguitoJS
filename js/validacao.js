const dataNascimento = document.querySelector('#nascimento')

// ALTERAÇÃO DO EVENTO (LOAD -> BLUR)
dataNascimento.addEventListener('blur', (evento) => {
    validacaoDataNascimento(evento.target)
})

function validacaoDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorDe18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
    // ENVIANDO A MENSAGEM PARA O HTML POR UM <p>
    document.getElementById('teste').innerHTML =  input.validationMessage
}

function maiorDe18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date (data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}