///////////////////////////////////////
// Lecture: Hoisting

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