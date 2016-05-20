'use strict';

function checkSpam(string) {
    var lowerCaseString = string.toLowerCase();
    if (lowerCaseString.indexOf('sex') !== -1  || lowerCaseString.indexOf('spam') !== -1 ) {
        return true;
    } else {
        return false;
    }
}


