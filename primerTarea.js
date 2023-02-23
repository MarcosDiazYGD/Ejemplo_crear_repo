"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let heroPower;
    (function (heroPower) {
        heroPower[heroPower["Acuaman"] = 0] = "Acuaman";
        heroPower[heroPower["Batman"] = 1] = "Batman";
        heroPower[heroPower["Flash"] = 5] = "Flash";
        heroPower[heroPower["Superman"] = 100] = "Superman";
    })(heroPower || (heroPower = {}));
    ;
    const fuerzaFlash = heroPower.Flash;
    const fuerzaSuperman = heroPower.Superman;
    const fuerzaBatman = heroPower.Batman;
    const fuerzaAcuaman = heroPower.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // console.log(pedir_ayuda());
    // console.log(activar_batiseñal());
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
