/***************************
 * Variables and data types
var firstName = 'Victor';
console.log(firstName);

var lastName = 'Contreras';
var age = 23;
console.log(firstName + ' ' + lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variables naming rules
var _3years = 3;
var jhonMark = 'John and Mark';
var _if = 23;
 */
/********************************
 * Variable mutation and type coercion

var firstName = 'Victor';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job
            + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job
        + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/

/**********************************
* Basic operators

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 3);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x);
*/

/************************************
 * Operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x = x * 2;
x *= 2;
x = Math.pow(x, 2)
console.log(x);
x++;
console.log(x);
*/

/****************************
 * Coding challenge

//Formula BMI = mass / height^2;
//(mass in Kg and height in meter)

var markMass = 78, johnMass = 92;
var markHeight = 1.69, johnHeight = 1.95;
var markBMI = markMass / Math.pow(markHeight, 2);
var johnBMI = johnMass / Math.pow(johnHeight, 2);
console.log(markBMI, johnBMI);
var markHigherBMI = markBMI > johnBMI;
console.log('Is mark\'s BMI higher than John\'s? ' + markHigherBMI);

 */

/*********************************************
 * IF / else statements


var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married');
}else{
    console.log(firstName + ' is ' + civilStatus);
}

var isMarried = true;
if(isMarried === true){
    console.log(firstName + ' is married');
}else{
    console.log(firstName + ' is ' + civilStatus);
}

*/

/*********************************************
 * Bolean logic

var firstName = 'John';
var age = 20;

if(age < 13){
    console.log(firstName + ' is a boy.');
}else if(age >= 13 && age < 20 ){
    console.log(firstName + ' is a teenager.');
}else if(age >= 20 && age < 30 ){
    console.log(firstName + ' is a young man.');
}else{
    console.log(firstName + ' is a man.');
}

*/

/************************************************
 * The Ternary operator and Switch Statements


var firstName = 'Victor';
var age = 16;

//Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if(age >= 18) {
    var drink = 'beer';
}else{
    var drink = 'juice';
}

// Switch statement
var job = 'teacher';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else');
}
*/

/*******************************************************
 * Truthy and Falsy Values and Equality Operators


// Falsy values: undefined, null, 0, '', NaN
// Truthy values: Not falsy values

var height;

height = '23';

if(height || height === 0){
    console.log('The variable is defined');
}else{
    console.log('variable has not been defined');
}

// Equality operators, this does not compare the data type, just the value
if(height == 23){
    console.log('The == operator does type coercion!');
}

*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

var JohnScored = (89 + 120 + 104) / 3;
var MikeScored = (89 + 120 + 103) / 3;
var MaryScored = (89 + 120 + 104) / 3;

if(JohnScored > MikeScored && JohnScored > MaryScored){
    console.log('John wins: ' + JohnScored + ' points');
}else if(MikeScored > JohnScored && MikeScored > MaryScored){
    console.log('Mike wins: ' + MikeScored + ' points');
}else if(MaryScored > JohnScored && MaryScored > MikeScored){
    console.log('Mary wins: ' + MaryScored + ' points');
}else{
    console.log('There is a draw');
}

*/

