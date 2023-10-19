// *******************Primitive Data Type****************************
// 7 Type :- String, Number, Boolean, Null, Undefined, Symbol, BigInt
myName = "Sandeep"; //String Datatype
console.log(myName);
console.log(typeof string);

const myNumber = 44;
console.log(myNumber);
console.log(typeof myNumber);

const idLogin = false;
console.log(idLogin);
console.log(typeof idLogin);

const temp = null;
console.log(temp);
console.log(typeof temp);

const myLocation = undefined;
console.log(myLocation);
console.log(typeof myLocation);

const Id = Symbol("123");
const newId = Symbol("123");
console.log(typeof Id);
console.log(typeof newId);
console.log(Id === newId);
//*******************Reference (Non Primitive)***********************
//Array, Object, Function

const hero = ["Ironman", "Superman", "Hanuman"]; //Array

let student = {
  name: "Sandeep",
  age: 23,
}; //Object

const myFunction = function () {
  console.log("Hello World");
}; // Function
