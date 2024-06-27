function reverseString(string){
    let finalString = '';
    for(let i = string.length; i >= 0; i--){
        finalString = finalString + string.slice(i, i + 1);
    }
    return finalString;
}

module.exports = reverseString;