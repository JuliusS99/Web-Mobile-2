const alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split("");

const diamond = () =>{
    return 'A';
};

//innere Slots
const innerSlots = (currentLetter) => {
    let amountOfDashes = alphabet.indexOf(currentLetter) *2 - 1 ;
    let innerDashes = '';
    for(let i = 0; i < amountOfDashes; i++){
        innerDashes += '-';
    };
    return innerDashes;
};

//äußere Slots
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

// Zeile :()
const makeLine = (targetLetter, currentLetter) => {
    if(currentLetter === 'A'){
        return outerSlots(targetLetter, currentLetter) + currentLetter + outerSlots(targetLetter, currentLetter);
    }else{
    return outerSlots(targetLetter, currentLetter) + currentLetter + innerSlots(currentLetter) + currentLetter + outerSlots(targetLetter, currentLetter);
    };
};

module.exports = {
    diamond,
    innerSlots,
    outerSlots,
    makeLine

};
