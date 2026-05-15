function caesarCipher(str, shift, decrypt = false) {
    if (decrypt) shift = -shift;

    return str.split("").map(char => {
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
        }

        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
        }

        return char;
    }).join("");
}

console.log(caesarCipher("Hello", 3));
console.log(caesarCipher("Khoor", 3, true));