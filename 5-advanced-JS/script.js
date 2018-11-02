// Function constructor
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function(){
  date = new Date();
  year = date.getFullYear()
  console.log(year-this.yearOfBirth);
}

Person.prototype.lastName = 'Contreras';

var john = new Person('John', 1990,'teacher');

console.log(john);

var jane = new Person('Jane', 1990, 'designer');

jane.calculateAge();

var mark = new Person('Mark', 1948, 'retired');

mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);

john.name = 'John';
john.job = 'teacher';
john.yearOfBirth = 1990;

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});
*/

// Primitives vs Objects

/*

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);

// Functions

var age = 25;
var obj = {
  name: 'Victor',
  city: 'Guzman'
};

function change(a, b){
  a = 30;
  b.city = 'San francisco';
}

change(age, obj);
console.log(age, obj.city);

*/

// Passing functions as arguments

// var years = [1994, 1988, 2011, 2000];

// function arrayCalc(arr, func){
//   var arrRes = [];
//   for(let i = 0; i < arr.length; i++){
//     arrRes.push(func(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(el) {
//   return 2018 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if(el >= 18 && el <= 81){
//     return Math.round(206.9 - (0.67 * el));
//   }else{
//     return -1;
//   }
// }
// // if we do that we will call the function and pass the return value
// //var ages = arrayCalc(years, calculateAge());
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);


/******************************* */
// Functions that return functions
/******************************* */

// function interviewQuestion(job){
//   if (job === 'designer'){
//     return function(name){
//        console.log(name + ', can you please what do you do');
//     }
//   } else if (job === 'teacher'){
//     return function(name){
//       console.log('What subject do you teach, ' + name + '?');
//     }
//   } else {
//     return function(name){
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('john');
// interviewQuestion('teacher')('Mark');

/******************************** */
// IIFE
/******************************** */

/*
function game(){
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game(); */

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);