'use strict';

for (var num = 1; num <=100; num++) {
    if (num%3 === 0) {
        console.log('Fizz'); continue;
    } if (num%5 === 0) {
        console.log('Buzz'); continue;
    }
console.log(num);
}