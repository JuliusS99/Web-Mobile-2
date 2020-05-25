const diamondKata = require("./diamond")
var diamond = require("./diamond.js");


test("diamond exists", function () {                        //1. Test, 
    expect(diamond.create).toBeInstanceOf(Function);
});

//Test der Überprüft, dass Anfangs A und am Ende auch A steht
