const birthInput = document.querySelector('#nascimento')

birthInput.addEventListener('blur', () => dateValidation(birthInput))

function dateValidation(input) {
    const birthDate = new Date(input.value)
    isOver18(birthDate)

    console.log(isOver18(birthDate))
}

function isOver18(data) {
    const currentDate = new Date()
    const moreThan18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return currentDate >= moreThan18
} 