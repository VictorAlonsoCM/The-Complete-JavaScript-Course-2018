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

/***************************************************
 * Functions


function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years');
    }else{
        console.log(firstName + ' is already retired');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

 */

/*****************************************
 * Function Statements and Expressions


// Function declaration
// function whatDoYouDo(job, firstName){};

 // Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teacher kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    };
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

*/

/***************************************
 * Arrays

 // Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John', 'Smith', 1990, 'designer', false];
// Add an element to the end of the array
john.push('blue');
// Add an element to the start of the array
john.unshift('Mr.')
console.log(john);

//Remove an element at the end of the array
john.pop();
john.pop();
// Remove an element at the start of the array
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀


var bills = [124, 48, 268];
console.log(bills);

var tipCalculator = function(bill){
    if(bill < 50){
        return (bill * 0.2);
    }else if(bill >= 50 && bill < 200){
        return (bill * 0.15);
    }else{
        return (bill * 0.1);
    }
}

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
console.log(tips);
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];
console.log(tips, finalValues);

*/

/************************************************ 
 *  Objects and Properties


var victor = {
    firstName: 'Victor',
    lastName: 'Contreras',
    birthYear: 1990,
    family: ['Andy', 'Martin', 'Victor'],
    job: 'Programmer',
    isMarried: false
};
console.log(victor.firstName);
console.log(victor['lastName']);
var x = 'birthYear';
console.log(victor[x]);
console.log(victor.job);
victor.job = 'No working';
console.log(victor.job);

*/

/*************************************************
 * Objects and methods

var victor = {
    firstName: 'Victor',
    lastName: 'Contreras',
    birthYear: 1996,
    family: ['Andy', 'Martin', 'Victor'],
    job: 'Programmer',
    isMarried: false,
    calcAge: function(birthYear){
        this.age =  2018 - this.birthYear;
    }
};

console.log(victor.calcAge(victor.birthYear));
//victor.age = victor.calcAge();
console.log(victor);

 */

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/ /*

var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function(){
        this.bmi =  this.mass / (this.height * this.height)
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.68,
    calcBMI: function(){
        this.bmi =  this.mass / (this.height * this.height)
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if(john.bmi > mark.bmi){
    console.log(john.fullName + ' has a higher BMI if ' + john.bmi);
}else if(mark.bmi > john.bmi){
    console.log(mark.bmi + ' has a higher BMI of ' + mark.bmi);
}else{
    console.log('Their have the same BMI');
}
*/

/*******************************************
 * Loops and iteration
 */
/*
for(let i  = 1; i <= 10; i++){
    console.log(i);
}

var victor = ['Victor', 'Contreras', 1994, 'Programmer', false];
for(let i = 0; i < victor.length; i++){
    console.log(victor[i]);
}

var i = 0;
while(i < victor.length){
    console.log(victor[i]);
    i++;
}

for(let i = 0; i < victor.length; i++){
    if(typeof victor[i] !== 'string') continue;
    console.log(victor[i]);
}

for(let i = 0; i < victor.length; i++){
    if(typeof victor[i] !== 'string') break;
    console.log(victor[i]);
}

for(let i = victor.length; i >= 0; i--){
    console.log(victor[i]);
}

*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/

/*
var bills = [124, 48, 268, 180, 42];
var tip = [];
var totalToPay = [];
function tipCalc(bills){
    for(let i = 0; i < bills.length; i++){
        if(bills[i] < 50){
            tip[i] = bills[i] * 0.2;
        }else if(bills[i] >= 50 && bills[i] < 200){
            tip[i] = bills[i] * 0.15;
        }else{
            tip[i] = bills[i] * 0.1;
        }
        totalToPay[i] = bills[i] + tip[i];
    }
}
tipCalc(bills);
for(let i = 0; i < bills.length; i++){
    console.log(totalToPay[i]);
} */
/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];

        for(let i = 0; i < this.bills.length; i++){
            //Determinate percentage based on tipping
            //rules
            var percentage;
            if(this.bills[i] < 50){
                percentage = 0.2;
            }else if(this.bills[i] >= 50 && this.bills[i] < 200){
                percentage = 0.15;
            }else{
                percentage = 0.1;
            }

            //Add results to the corresponding
            this.tips[i] = this.bills[i] * percentage;
            this.finalValues[i] = this.bills[i] + this.bills[i] * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// Do the calculations
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);
if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}

*/

