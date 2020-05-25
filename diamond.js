const alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split("");

const diamond = () =>{
    return 'A';
};

const innerSlots = (currentLetter) => {
    let amountOfDashes = alphabet.indexOf(currentLetter) *2 - 1 ;
    let innerDashes = '';
    for(let i = 0; i < amountOfDashes; i++){
        innerDashes += '-';
    };
    return innerDashes;
};

const outerSlots = (targetLetter, currentLetter) => {
    const innerSlotsTargetLetter = alphabet.indexOf(targetLetter) *2 - 1 ; // C: 3
    let innerDashesCurrentLetter = alphabet.indexOf(currentLetter) *2 - 1; // B: 1, A:0
    amountOfDashes = (innerSlotsTargetLetter - innerDashesCurrentLetter) /2; //B: 1 A:?

    let outerDashes = '';
    for(let i = 0; i < amountOfDashes; i++){
        outerDashes += '-';
    };

    return outerDashes;

};

module.exports = {
    diamond,
    innerSlots,
    outerSlots
};
