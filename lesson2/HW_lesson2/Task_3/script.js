'use strict';

var userLogin = prompt('Уважаемый пользователь, введите Ваш login?', '');

if (userLogin == 'admin') {

    var pass = prompt('Введите Ваш пароль', '');

    if (pass == 'passw0rd') {
        alert('Welcome home!');
    } else if (pass == null) {
        alert('Cancelled');
    } else {
        alert('Wrong password');
    }

}   else if (userLogin == null) {
    alert ( 'Cancelled' );
}   else {
    alert( 'Access denied' )
}

