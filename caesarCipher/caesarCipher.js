function caesarCipher(word, key) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let cipherAlphabet = alphabet.slice(key) + alphabet.slice(0, key);
    
    let encryptedWord = '';
    for (let char of word) {
        if (/[a-zA-Z]/.test(char)) { 
            let isUpperCase = char === char.toUpperCase();
            let index = alphabet.indexOf(char.toUpperCase());
            let shiftedChar = cipherAlphabet[index];
            
            if (!isUpperCase) {
                shiftedChar = shiftedChar.toLowerCase();
            }
            encryptedWord += shiftedChar;
        } else {
            encryptedWord += char; 
        }
    }
    
    return encryptedWord;
}

module.exports = caesarCipher;