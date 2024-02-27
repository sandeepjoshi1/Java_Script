/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Sandeep");
console.log(123);

let firstName = "Sandeep Joshi";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Rules to write variable name

// let firstName = "Sandeep"
// let frts_Name = "Sandeep"  (both of this is ok )

// let 2person = ("Sandeep Kuldeep")  (It is not accepted in js)
// out put in console === (Uncaught SyntaxError: Invalid or unexpected token)
let myFirstJob = "Programmer";
console.log(myFirstJob);

let country = "India";
let continent = "Asia";
let population = 1425775850;

console.log(country);
console.log(continent);
console.log(population);
*/

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 25);
// console.log(typeof "Sandeep");

//Dyanimic Typing

// javaScriptIsFun = "Yes!";
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1996;
// console.log(typeof year);

// Data type assingement

/*let country = "India";
let continent = "Asia";
let population = 1425775850;
let isIsland = false;
let language;

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);*/

// Three type to declair variable
// let age = 30;
// age = 31; //(let is block scoped)

// const birthYear = 1996;
// birthYear = 1990;

// const job;

// var job = " programmer";
// job = "teacher"; //(var is function scoped)

// lastName = "Joshi";
// console.log(lastName);  // (not a good way to create a variable )

//arithmetic operators*****************
// const now = 2024;
// const ageSandeep = now - 1996;
// const ageShivani = now - 2000;
// console.log(ageSandeep, ageShivani);

// console.log(ageSandeep * 2, ageShivani / 10, 2 ** 3);

// const firstName = " sandeep";
// const lastName = "Joshi";
// console.log(firstName + " " + lastName);

//Assignment Operator
// let x = 10 + 5; //15
// x += 10; //25
// x *= 4; // 100
// x -= 50; //50
// x++; // 50 + 1 = 51
// x--; //51 - 1 = 50
// console.log(x);

// Comparison operators

// console.log(ageSandeep > ageShivani); // > , < , >= , <=
// console.log(ageShivani >= 18);

// const isMager = ageShivani >= 18;

// const now = 2024;
// const ageSandeep = now - 1996;
// const ageShivani = now - 2000;

// console.log(now - 1996 > now - 2000);

// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 15 - 5; //10
// console.log(x, y);

// const averageAge = (ageSandeep + ageShivani) / 2;
// console.log(ageSandeep, ageShivani, averageAge);

// ***************CHALLENGE-1***************
// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = "Snadeep JOshi";
// const job = "Programmer";
// const birthYear = 1996;
// const year = 2023;

// const sid =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(sid);
// // ------------------ use of Template literals----------------
// const sidNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(sidNew);

// console.log(`hello,
// this
// string
// is
// with
// multiple
// lines`);
// ********************************************************

// const age = 16;

// if (age >= 18) {
//   console.log(`You can have your driving Licence 🚗`);
// } else {
//   const leftYear = 18 - age;
//   console.log(
//     `You cant have a driving Licence yet 👮🏻‍♂️.Wait for another ${leftYear} year 😁👍 `
//   );
// }

/*const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
  console.log(
    `You belongs to ${century}th century , Your generation is known as "Generation Z" `
  );
} else {
  century = 21;
  console.log(
    `You belongs to  ${century}th century , Your generation is known as "Millennials" `
  );
}*/

// ***************CHALLENGE-2***************
/*const massMark = 68;
const heightMark = 1.69;
const massJohn = 62;
const heightJohn = 1.55;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

   if (BMIMark>BMIJohn) {
      console.log(`Mark's BMI is higher than John's!.`);}
       else {
      console.log(`John's BMI is higher than Mark's!.`);}
  
  if (BMIMark>BMIJohn) {
      console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);}
       else {
      console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);}


*/
// *************************************************************

// --------------Type Conversion--------------
/*const inputYear = "1996";
console.log(Number(inputYear));
console.log(typeof Number(inputYear));
console.log(inputYear + 18);
console.log(typeof inputYear);
console.log(Number(inputYear) + 18);

const myName = "Sandeep Joshi";
console.log(typeof Number(myName));*/

// -------------------Type Coercion------------------

// console.log(`I am ` + 28 + ` year old`);
// console.log(`23` + `10` - 30);

//5 falsy values: 0, "" , undefined , null, NaN.

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("sandeep"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log(`Don't spend it all`);
} else {
  console.log(`You should get a job`);
}

let height = 1;
if (height) {
  console.log(`Height is defined`);
} else {
  console.log(`Height is not defined`);


}*/

// **********************Equality Operator*********************
// const age = "18";
// if (age === 18) console.log(`You just become a adult (strict)`);
// if (age == 18) console.log(`You just become a adult (loose)`);

/*const favourite = Number(prompt(`What is Your favourite number`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === favourite) {
  console.log(`${favourite} is a grate number!`);
}

if (favourite === 25) {
  console.log(`25 is a grate number!`);
} else if (favourite === 9) {
  console.log(`9 is a grate number!`);
} else if (favourite === 7) {
  console.log(`7 is a grate number`);
} else {
  console.log(`${favourite} is also grate number!`);
}
*/

// *******************************Logical Operators*******************

/*const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Your are able to dreive`);
} else {
  console.log(`Someone else should drive`);
}

const isTired = false; //c

console.log(!hasDriversLicense || hasGoodVision || isTired);
console.log(!hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Your are able to dreive`);
} else {
  console.log(`Someone else should drive`);
}*/

// -----------------------------------Chalange #3----------------------------

/*const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (96 + 89 + 108) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins < scoreKoalas) {
  console.log(`Koalas win the trophy`);
} else if (scoreDolphins === scoreKoalas) {
  console.log(`Both win the trophy`);
}
*/

// **Bonus-1
/*
console.log(`Bonus - 1`);
const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 + 123) / 3;
console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins1 < scoreKoalas1 && scoreKoalas1 >= 100) {
  console.log(`Koalas win the trophy`);
} else if (
  scoreDolphins1 === scoreKoalas1 &&
  scoreDolphins1 >= 100 &&
  scoreKoalas1 >= 100
) {
  console.log(`Both win the trophy`);
} else {
  console.log(`Both team loose`);
}
*/
// **Bonus-2

/*console.log(`Bonus - 2`);
const scoreDolphins2 = (97 + 112 + 81) / 3;
const scoreKoalas2 = (109 + 95 + 86) / 3;

console.log(scoreDolphins2, scoreKoalas2);

if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins2 < scoreKoalas2 && scoreKoalas2 >= 100) {
  console.log(`Koalas win the trophy`);
} else if (
  scoreDolphins2 === scoreKoalas2 &&
  scoreDolphins2 >= 100 &&
  scoreKoalas2 >= 100
) {
  console.log(`Both win the trophy`);
} else {
  console.log(`No one wins the trophy`);
}
*/
// ******************************The Switch Statement*********************

/*const day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Upper Body Strength");
    break;
  case "Tuesday":
    console.log("Cardio and Core");
    break;
  case "Wednesday":
    console.log(" Cardio and High-Intensity Interval Training (HIIT)");
    break;

  case "Thursday":
    console.log("Lower Body Strength");
    break;
  case "Friday":
    console.log("Active Recovery or Yoga");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Rest or Light Activity");
    break;
  default:
    console.log("Not a valid day!");
    break;
}
*/
// ################### Use of if else Statement##############
/*
let day = "Tuesday";
if (day === "Monday") {
  console.log("Upper Body Strength");
} else if (day === "Tuesday") {
  console.log("Cardio and Core");
} else if (day === "Wednesday") {
  console.log("Cardio and High-Intensity Interval Training (HIIT)");
} else if (day === "Thursday") {
  console.log("Lower Body Strength");
} else if (day === "Friday") {
  console.log("Active Recovery or Yoga");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Rest or Light Activity");
} else {
  console.log("Not a valid day!");
}
*/

// const age = 20;
// age >= 28
//   ? console.log(`I like to drink wine🍷`)
//   : console.log(`I like to drink juse 🧋`);

// ------------------------------------------Challenge #4-----------------------------------

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The amount of bill=${bill}Rs,between 50 to 300.
15% tip is= ${tip}Rs.
Total amount=${bill + tip}`);
