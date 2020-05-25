module.exports.create = null;


module.exports = {                      //function wird erstellt um den Diamond zu erstellen
    create: function () {
        "use strict";
        return;
    }
};

function a (char) {               //für undifined char return "A"
    if (char === "A") {
        return ["A"];
    }
    return [
        " A ",
        "B B",
        " A "
    ];
}
