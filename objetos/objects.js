"use strict";
(() => {
    let user = {
        name: 'Marcos Diaz',
        age: 19,
        skills: ['js', 'HTML', 'CSS', 'REACT', 'NODE.JS', 'EXPRESS.JS']
    };
    user = {
        name: 'Martha',
        age: 19,
        skills: [' Nurse'],
        getName() {
            return this.name;
        }
    };
})();
