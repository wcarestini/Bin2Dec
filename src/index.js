function convertBinaryToDecimal(event) {

    event.preventDefault()

    const binary = document.querySelector('.form-input').value

    if (!isBinary(binary)) {
        return
    }

    const base = 2
    let decimal = 0

    const reverseBinary = binary.split('').reverse().join('')

    reverseBinary.split('').forEach((bit, index) => {
        decimal += Math.pow(base, index) * bit
    })

    alert(decimal)
}

function isBinary(number) {
    const regex = /^[0-1]{1,8}$/

    if (!regex.test(number)) {
        alert(`${number} is not a binary number.`)
        return false
    }

    return true
}
