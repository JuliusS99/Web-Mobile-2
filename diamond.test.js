const diamond = require("./diamond.js");

describe("diamond", () => {
    [
        { input: 'A', output: 'A'}
    ].forEach(({input, output}) => {
        it(`should return ${output} on input "${input}"`, () => {
            expect(diamond.diamond(input)).toEqual(output)
        })
    })
});

describe("innere Striche", () => {
    [
        { input: 'B', output: '-'},
        { input: 'A', output: ''},
    ].forEach(({input, output}) => {
        it(`should return ${output} on input "${input}"`, () => {
            expect(diamond.innerSlots(input)).toEqual(output)
        })
    })
});

describe("äußere Striche", () => {
    [
        {targetLetter: 'C', currentLetter: 'A', output: '--'},
        {targetLetter: 'C', currentLetter: 'B', output: '-'}
    ].forEach(({targetLetter, currentLetter, output}) => {
        it(`should return ${output} on input ${targetLetter} and ${currentLetter}`, () => {
            expect(diamond.outerSlots(targetLetter, currentLetter)).toEqual(output)
        })
    })
});

describe("Zeile", () => {
    [
        {targetLetter: 'C', currentLetter: 'A', output: '--A--'},
        {targetLetter: 'C', currentLetter: 'B', output: '-B-B-'}
    ].forEach(({targetLetter, currentLetter, output}) => {
        it(`should return ${output} on input ${targetLetter} and ${currentLetter}`, () => {
            expect(diamond.makeLine(targetLetter, currentLetter)).toEqual(output)
        })
    })
});

