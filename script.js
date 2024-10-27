function countCharacter (string) {

    let number = 0
    let lowercase = 0
    let uppercase = 0
    let special = 0

    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'A '&& string[i] <= 'Z') {
            uppercase++
        } else if (string[i] >= 'a' && string[i] <= 'z') {
            lowercase++
        } else if (string[i] >= '0' && string[i] <= '9') {
            number++
        } else {
            special++
        }
}
const msg = `Na string contem: ${uppercase} letras maiusculas,
${lowercase} minusculas, ${number} numeros e ${special} caracteres speciais`
console.log(msg)
}

let str = "1234abcdEFGH!@#$"
countCharacter(str)