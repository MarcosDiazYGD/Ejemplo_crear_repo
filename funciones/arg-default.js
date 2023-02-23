"use strict";
(() => {
    const name = (firstName, lastName, upper = false) => {
        if (upper) {
            return (`${firstName} ${lastName}`).toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    console.log(name('Marcos', 'Diaz', true));
})();
