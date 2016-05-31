'use strict';

function removeClass(obj, cls) {
    var classes = obj.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1); // удалить класс
            i--; // (*)
        }
    }
    obj.className = classes.join(' ');
}

var obj = {
    className: 'my menu menu'
}

removeClass(obj, 'menu')
console.log(obj);
