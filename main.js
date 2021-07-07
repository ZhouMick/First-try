
function enter() {

var a = document.getElementsByName('1')[0].value;
var b = document.getElementsByName('2')[0].value;
var re = (1/2) * a * b;

document.getElementsByName('f')[0].value= re;

}


function calculation() {

var c = document.getElementsByName('3')[0].value;
var d = document.getElementsByName('4')[0].value;
var rem =  d/( c*c);

document.getElementsByName('u')[0].value= rem;

}