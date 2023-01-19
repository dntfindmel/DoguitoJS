
alert("Aqui passouj")
const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('load', (evento) => {
     validacaoDataNascimento(evento.target)
})

function validacaoDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorDe18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

function maiorDe18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date (data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}