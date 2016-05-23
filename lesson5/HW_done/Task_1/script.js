'use strict';

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var max = 0;
var whoMadeMoreTasks = '';

for ( var name in tasksCompleted ) {
    if ( max < tasksCompleted[name] ) {
        max = tasksCompleted[name];
        whoMadeMoreTasks = name;
    }
}

console.log(whoMadeMoreTasks);