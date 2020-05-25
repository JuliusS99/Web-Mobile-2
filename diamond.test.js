var diamond = require("./diamond.js");


test("diamond exists", function () {                        //1. Test, diamond function  
    expect(diamond.create).toBeInstanceOf(Function);
});


test("A Diamond = A", function () {
    expect(diamond.create("A")).toEqual(["A"]);
});
