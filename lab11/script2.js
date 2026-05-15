function generatePassword(options) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*";

    let chars = lower;

    if (options.includeUppercase) chars += upper;
    if (options.includeNumbers) chars += numbers;
    if (options.includeSymbols) chars += symbols;

    let password = "";

    for (let i = 0; i < options.length; i++) {
        const randIndex = Math.floor(Math.random() * chars.length);
        password += chars[randIndex];
    }

    return password;
}

console.log(generatePassword({
    length: 10,
    includeNumbers: true,
    includeSymbols: true,
    includeUppercase: true
}));
