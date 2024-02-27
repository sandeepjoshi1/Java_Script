"use strict";
//
/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can can drive car :D `);
*/

// --------------Function------------------

// simple Function
/*
function myName() {
  console.log(`My name is Sandeep joshi`);
}

// calling / running / invoking function
myName();
myName();
myName();
*/

//full Function
/*
function fruitProcessor(apple, oranges) {
  const juice = `Juice with ${apple} apple and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//Adding two number
/*
function addingTwoNumber(num1, num2) {
  return `some of two munber is = ${num1 + num2}.`;
}

console.log(addingTwoNumber(5, 5);

*/

//Age Calculation:-

// ~~~~~~~~~~Function Declaration~~~~~~~~~~~~~
/*function ageCalculater1(birthYear) {
  return `your age is = ${2024 - birthYear}`;
}
const age1 = ageCalculater1(1996);
console.log(age1);*/

// function calcAge(birthYear) {
//   const currentYear = 2024;
//   return currentYear - birthYear;
// }
// const age = calcAge(1996);
// console.log(age);

//~~~~~~~~~~~Function Expression~~~~~~~~~~~~~~~
/*const ageCalculater2 = function (birthYear) {
  return `your age is = ${2024 - birthYear}`;
}
const age2 = ageCalculater2(2000);
console.log(age2);
*/

/*
const ageCalculater2 = function (birthYear) {
  return `your age is = ${2024 - birthYear}`;
};
*/

//~~~~~~~~~~~~~~~~~~~~~Arrow finction~~~~~~~~~~~~~~~~~

/*
const ageCalculater3 = (birthYear) => 2024 - birthYear;
const age3 = ageCalculater3(1996);
console.log(age3);

//Retirement Canculater

const yerasUntilRetirement = (birthYear, firstName) => {
  const age4 = 2024 - birthYear;
  const retirementIn = 65 - age4;
  // return retirementIn;
  return `${firstName} retires in ${retirementIn} years`;
};

console.log(yerasUntilRetirement(1996, `Sandeep`));
console.log(yerasUntilRetirement(2000, `shivani`));
*/

// Function Calling Function

/*const fruitCuttingMachine = function (fruits) {
  return fruits * 3;
};

function fruitProcessor(apple, oranges) {
  const applePieces = fruitCuttingMachine(apple);
  const OrangePieces = fruitCuttingMachine(oranges);
  const juice = `Juice with ${applePieces} apple and ${OrangePieces} oranges.`;

  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// const squareOfNumber = (number1) => number1 * number1;
// const square = squareOfNumber(7);
// console.log(square);

// Q3;- // Write a function to concatenate two strings.
/*
function concatenate(string1, string2) {
  const stringConcat = `${string1}` + ` ${string2}`;
  return stringConcat;
}
const string3 = concatenate(`My name is, `, `sandeep joshi`);
console.log(string3);
*/

/*
const calAge = function (birthYear) {
  return 2024 - birthYear;
};

const yerasUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  // return retirement;
  if (retirement > 0) {
    console.log(
      `${firstName} is currently ${age} years old, he have ${retirement} years remaining until retirement.`
    );
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🍷. `);
    return -1;
  }
};

console.log(yerasUntilRetirement(1996, `sandeep`));
console.log(yerasUntilRetirement(1942, `Rahul`));
*/

// *************************JavaScript Fundamentals – Part 2***************************
// -------------------Coding Challenge #1----------------
/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(25, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win by (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win by (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log(`No team wins`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(500, 100);
checkWinner(50, 200);

// test2;
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

// ----------------Array-----------------
/*
const friend1 = "Rahul";
const friend2 = "viney";
const friend3 = "siddhart";
const friend4 = "shivani";

const friends = ["Rahul", "Vinay", "Siddhart", "Shivani"];
console.log(friends);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const y = new Array(1993, 1994, 1995, 1996, 1997, 1998, 1999);
console.log(y);
friends[0] = "Jai";
console.log(friends);
console.log(y.length);
*/
// Error
/*
friends = ["Pawan", "Radhey", "Pawan", "Bunty"]; script.js:218 Uncaught TypeError: Assignment to constant variable.//
console.log(friends);

const mySelf = ["Sandeep", "Joshi", 2024 - 1991, "Student", friends];
console.log(mySelf);
console.log(mySelf.length);
*/
//Exercise
/*
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const year = [1993, 1994, 1995, 1996, 1997, 1998, 1999];
const age1 = calcAge(year[0]);
console.log(age1);
const age2 = calcAge(year[1]);
console.log(age2);
const age3 = calcAge(year[year.length - 5]);
console.log(age3);
const age4 = calcAge(year[3]);
console.log(age4);
const age5 = calcAge(year[4]);
console.log(age5);
const age6 = calcAge(year[5]);
console.log(age6);
const age7 = calcAge(year[year.length - 1]);
console.log(age7);

const ages = [
  calcAge(year[0]),
  calcAge(year[1]),
  calcAge(year[year.length - 5]),
  calcAge(year[3]),
  calcAge(year[4]),
  calcAge(year[5]),
  calcAge(year[year.length - 1]),
];

console.log(ages);
*/

// const friends = ["Sandeep", "Kuldeep", "Shivani"];
// const newLength = friends.push("Rahul", "Happy");

// //Add element
// console.log(friends);
// console.log(newLength);

// const newLengths = friends.unshift("Ashu"); //first
// console.log(friends);
// console.log(newLengths);
// //Remove Element
// friends.pop();
// console.log(friends);
// friends.pop();
// console.log(friends);

// friends.shift(); //first
// console.log(friends);

// console.log(friends.indexOf("Shivani"));
// console.log(friends.includes("shivani"));
// console.log(friends.includes("Shivani"));

// if (friends.includes("Shivani")) {
//   console.log(`you have friend Shivani`);
// }
/*
const calcTip = function (billValue) {
  let tip;
  if (billValue >= 50 && billValue <= 300) {
    tip = billValue * 0.15;
    console.log(
      `the bill is ${billValue} Rs. and the Tip is 15% which is ${tip}Rs. total amount ${
        billValue + tip
      }Rs.`
    );
  } else {
    tip = billValue * 0.2;
    console.log(
      `the bill is ${billValue} Rs. and the Tip is 20% which is ${tip}Rs. total amount ${
        billValue + tip
      }Rs.`
    );
  }
};
calcTip(620);
// */
// function isprime(n) {
//   if (n < 2) console.log(`${n} is not a prime no`);

//   for (let i = 2; i <= n; i++) {
//     console.log(i);
//   }
// }
// isprime(8);

// Fruit-Processor

// const fruitsProcessor = function (unit1, unit2) {
//   return `This juice conatin ${unit1} whole  of apple  and ${unit2} whole of oranges`;
// };

// const fruitJuise = fruitsProcessor(5, 2);
// console.log(fruitJuise);

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`you can start driving,Go for license`);
// } else {
//   const yearLeft = 18 - age;

//   console.log(
//     `Just go to driving school you have ${yearLeft} year left to aply for licence`
//   );
// }

// const birthYear = 1996;
// let century;
// if (birthYear <= 2000) {
//   century = "20 century";
// } else {
//   century = "21 century";
// }
// console.log(century);

// const calsAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calsAge3(1991);
// console.log(age3);

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// let scoreDolhins = calcAverage(200, 400, 71);

// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = (avgDolhins, avgKoalas) => {
//   if (avgDolhins >= 2 * avgKoalas) {
//     console.log(`Dolphins win by ${avgDolhins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= avgDolhins * 2) {
//     console.log(`Koalas win by ${avgKoalas} vs ${avgDolhins}`);
//   } else console.log(`disqualified`);
// };

// checkWinner(scoreDolhins, scoreKoalas);
// checkWinner(500, 200);
// checkWinner(500, 1500);
// checkWinner(500, 500);

//  ````````````````````````Add element`````````````````````
// push
// unshift
//``````````````````Remove element````````````````
// pop
//shift

// const friends = ["Sandeep", "Abdul", "Bajrangi"];
// const newLength = friends.push("jai");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Puja");
// console.log(friends);

// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Abdul"));

// console.log(friends.includes("sandeep"));
// console.log(friends.includes("Sandeep"));

// if (friends.includes("sandeep")) {
//   console.log(`You have a friend name ${friends[0]}`);
// } else {
//   console.log(`No you dont have friend name ${friends[0]}`);
// }

// `````````````````````Coding Challenge #2````````````````````
/*
const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? billValue * 0.15
    : billValue * 0.02;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

// -------------------Objects------------------
/*
const sandeepJoshi = [
  "Sandeep",
  "Joshi",
  2024 - 1996,
  ["Rahul", "Pankaj", "Ganesh"],
];
console.log(sandeepJoshi);

const mySelf = {
  firstName: "Sandeep",
  lastName: "Joshi",
  age: 2024 - 1996,
  friends: ["Rahul", "Pawan", "Ravi"],
};
console.log(mySelf);
console.log(mySelf["lastName"]);
console.log(mySelf["firstName"]);
console.log(mySelf["firstName"] + ["lastName"]);

const nameKey = "Name";

console.log(mySelf["first" + nameKey]);
console.log(mySelf["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about me? Choose between firstName, lastName, age, job and friends"
// );
// console.log(mySelf[interestedIn]);

// if (mySelf[interestedIn]) {
//   console.log(mySelf[interestedIn]);
// } else {
//   console.log("Wrong request!");
// }

mySelf.location = "India";
mySelf["Gmail"] = "@gmail.com";
console.log(mySelf);

// ("Sandeep has 3 friends , and his best friend is called rahul");
console.log(
  `${mySelf.firstName} has ${mySelf.friends.length} friends , and his best friend was ${mySelf.friends[0]}`
);
*/

// const mySelf = {
//   firstName: "Sandeep",
//   lastName: "Joshi",
//   age: 1996,
//   friends: ["Rahul", "Pawan", "Ravi"],
//   hasDrivingLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2024 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2024 - this.age;
//   // },

//   calcAge: function () {
//     this.age1 = 2024 - this.age;
//     return this.age1;
//   },
// };

// console.log(mySelf.calcAge());

// console.log(mySelf.age1);
// console.log(mySelf.age1);
// console.log(mySelf.age1);
// console.log(mySelf["calcAge"](2000));
// // console.log([mySelf]);

// // ------------------challenge #3 ----------------

/*const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}
*/

// Lecture :- Iterative : the FOR loop

// console.log(`Lifting Weight Repetition 1`);
// console.log(`Lifting Weight Repetition 2`);
// console.log(`Lifting Weight Repetition 3`);
// console.log(`Lifting Weight Repetition 4`);
// console.log(`Lifting Weight Repetition 5`);
// console.log(`Lifting Weight Repetition 6`);
// console.log(`Lifting Weight Repetition 7`);
// console.log(`Lifting Weight Repetition 8`);
// console.log(`Lifting Weight Repetition 9`);
// console.log(`Lifting Weight Repetition 10`);

//for loop keep running while condition is True
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting Weight Repetition ${rep}🏋🏻‍♂️`);
// }
/*
const sandeepArray = [
  "Sandeep",
  "Joshi",
  2024 - 1996,
  ["Rahul", "Pankaj", "Shivani"],
  true,
];
*/
// const types = [];

// for (let i = 0; i < sandeepArray.length; i++) {
//   console.log(sandeepArray[i], typeof sandeepArray[i]);

//   types[i] = typeof sandeepArray[i];
//   types.push(typeof sandeepArray[i]);
// }

// console.log(types);

/*
const year = [1997, 2000, 1996, 1993];
const age = [];
for (let i = 0; i < year.length; i++) {
  age.push(2024 - year[i]);
}

console.log(age);

//continue and break

console.log("-------only Strings-------");
for (let i = 0; i < sandeepArray.length; i++) {
  if (typeof sandeepArray[i] !== "string") continue;
  console.log(sandeepArray[i], typeof sandeepArray[i]);
}

console.log("-------BREAK WITH NUMBER -------");
for (let i = 0; i < sandeepArray.length; i++) {
  if (typeof sandeepArray[i] === "number") break;
  console.log(sandeepArray[i], typeof sandeepArray[i]);
}
*/

/*
const sid = [
  "Sandeep",
  "Joshi",
  2024 - 1996,
  ["Rahul", "Shiv", "Pankaj"],
  true,
];

//0,1,2,3,4
//4,3,2,4
for (let i = sid.length - 1; i >= 0; i--) {
  console.log(i, sid[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----Starting Exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repetition ${rep} 🏋🏻‍♂️`);
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log(`Loop is about to end...`);
}
