///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965);

//Function declaration
function calculateAge(year){
    console.log(2016 - year);
}
calculateAge(1990);


//retirement(1956);

//Function expression
var retirement = function(year){
    console.log(65 - (2016 - year));
}

retirement(1990);

// variables

var age = 23;
console.log(age);

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

*/

/////////////////////////////////////
// Lecture: Scoping

// First scoping example
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the difference between execution stack and scope chain
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third();
    }
}
function third() {
    var d = 'Victor';
    //console.log(c);
    console.log(a+d);
}