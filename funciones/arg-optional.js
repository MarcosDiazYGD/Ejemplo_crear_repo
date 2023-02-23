"use strict";
(() => {
    const name = (firstName, lastName) => {
        return `${firstName} ${lastName || ''}`;
    };
    console.log(name('Maros'));
})();
