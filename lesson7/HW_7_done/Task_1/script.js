'use strict';

function sum(a) {
    return function(b) {
        return function(c) {
         return a+b+c;
        }
    }
}

function makeBuffer() {
    var text = '';

    function(slovo) {
        if (arguments.length == 0) {
            return text;
        } text += slovo;
    };
}

var buffer = makeBuffer();