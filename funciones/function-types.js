"use strict";
(() => {
    function sum(num1, num2) {
        return num1 + num2;
    }
    function greet(name) {
        return 'Hola ' + name;
    }
    function saveTheWord() {
        return `The word is saved`;
    }
    // let myFunction: Function
    // let myFunction: (a:number, b:number) => number
    // let myFunction: (a:string) => string
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // myFunction = sum
    // console.log(myFunction(1,2));
    // myFunction = greet
    // console.log(myFunction('Marcos'));
    myFunction = saveTheWord;
    console.log(myFunction());
})();
