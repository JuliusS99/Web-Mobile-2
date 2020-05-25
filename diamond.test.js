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