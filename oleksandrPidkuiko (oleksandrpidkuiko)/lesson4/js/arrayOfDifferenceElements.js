'use strict';

function difference(arg1, arg2) {
    let differenceElements = [];
    arg1.forEach(function (item) {
        if(arg2.indexOf(item) === -1) {
            differenceElements.push(item);
        }
    });

    return differenceElements ;
}
