const promisesone = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promisesone.then(function () {
  console.log("Promises one resolved");
});

//Promises 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("promises 2 resolved");
});

//promises 3

const promissesThird = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sandeep", email: "Sandeepjisno@gmail.com" });
  }, 3000);
});
promissesThird.then(function (user) {
  console.log(user);
});

//promises 4
const promiseFourth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Sandeep_Joshi", password: "12345" });
    } else {
      reject("ERROR: Somthing went wrong");
    }
  }, 4000);
});
promiseFourth
  .then((user) => {
    console.log(user);
    return user.password;
  })
  .then((password) => {
    console.log(password);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log("The promises is either resolved or rejected"));

  //promises 5
  const promiseFifth = new Promise(function(resolve,reject){
     
  })