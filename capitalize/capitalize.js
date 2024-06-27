function capitalize(string) {
    let firstChar = string[0].toUpperCase();
    let restOfChar = string.slice(1);
    firstChar.toUpperCase();
    string = firstChar + restOfChar;
    return string;
}

module.exports = capitalize;