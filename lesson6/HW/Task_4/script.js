'use strict';

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];

function whoIsOlder(men1, men2) {
    return men1.age - men2.age;
}

//Вызовем функцию сортировки

people.sort(whoIsOlder);

//Переберем массив людей и отобразим в консоле имена по увеличению возраста

for(var i = 0; i < people.length; i++) {
    console.log(people[i].name);
}