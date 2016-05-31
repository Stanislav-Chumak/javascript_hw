'use strict';

function isPal(string) {
    var toLwrCase = string.toLowerCase().replace(/\s+/g, '');
    return (toLwrCase == toLwrCase.split('').reverse().join('')) ? 'True' : 'False';
}

console.log(isPal('Anna'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('Вася'));
console.log(isPal('12321'));
console.log(isPal('123212'));
