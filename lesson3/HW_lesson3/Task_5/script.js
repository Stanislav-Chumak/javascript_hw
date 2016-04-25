'use strict';

var chessBoard = "";
for (var i=1; i<=8; i++){
    if(i%2===0)
        chessBoard += " # # # #\n";
    else
        chessBoard += "# # # # \n";
}
console.log(chessBoard);