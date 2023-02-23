"use strict";
(() => {
    const name = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName}`;
    };
    console.log(name('Maros', 'Diaz'));
})();
