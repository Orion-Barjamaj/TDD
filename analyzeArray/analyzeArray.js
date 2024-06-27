function analyzeArray(array){
    const sum = array.reduce((acc, current) => acc + current, 0);
    const avarage = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;
    return {avarage, min, max, length};
}

module.exports = analyzeArray;