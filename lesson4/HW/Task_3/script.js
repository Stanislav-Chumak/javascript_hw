'use strict';

function stringCutter(string, maxLength) {
    return (string.length > maxLength) ? string.slice(0, maxLength - 3) + '...' : str;
}