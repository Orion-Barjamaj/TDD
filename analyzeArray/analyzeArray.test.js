const analyzeArray = require('./analyzeArray');

test('Returns avarage: 3, min: 1, max: 9, length: 8 to this array[7,6,2,1,8,9,4,3]', () =>{
    const result = analyzeArray([7,6,2,1,8,9,4,3]);
    expect(result).toEqual({
        avarage: 5,
        min: 1,
        max: 9,
        length: 8
    });
})