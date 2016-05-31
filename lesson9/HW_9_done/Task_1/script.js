'use strict';

//Задача №1. Урок 9. Перепишите суммирование аргументов
function sumArgs() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

alert( sumArgs(4, 5, 6) );