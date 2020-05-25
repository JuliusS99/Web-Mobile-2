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

module.exports = {
    diamond,
    innerSlots
};
