'use strict';

OneMoreTime:
    for (var i = 2; i < 10; i++) {

        for (var a = 2; a < i; a++) {
            if (i % a == 0) continue OneMoreTime;
        }
        alert(i);
    }