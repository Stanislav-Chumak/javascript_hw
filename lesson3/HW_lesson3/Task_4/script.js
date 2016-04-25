'use strict';

for (var num = 1; num <=100; num++) {
    if (num%3 === 0 && num%5 ===0) {
        console.log('FizzBuzz'); continue;
    }
    console.log(num);
}