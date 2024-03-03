// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2024 - 1996;

// console.log(calcAge);

// PROBLEM;
//We work for a company building a smart home thermometer.Our most recent task is this : "Give an array of temperrature of one day , calculate the Temperature amplituted. Keep in mind that sometimes there might be a sensor error"

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// understanding the problems?
// question to ask ?

// -what is Temperature amplituted?
// -What is sensore error ? And what it do?

// 2) Breakinng up into sub-problems
// -how to ignore errors?
// -find max value in temp array ?
// -find mai value in temp array ?
// -substract min from max (amplitute) and return it

// const calcTempAmplituteNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   // console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplituteNew = calcTempAmplituteNew(
//   [2, 3, 4, 8, 9],
//   [10, 11, 26, 'error', '2z']
// );
// console.log(amplituteNew);

// PROBLU 2:
//Function should now receive 2 arrays of temperature

// 1) Understand the problums
// -With 2 arrays, should we implement functionality twice? No! just murge two array?

// 2) Breaking up into sub-problems
// -how to merge 2 array

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [7, 8, 9];

// const numbers = num1.concat(num2, num3);

// console.log(numbers);
// // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //c) Fix
    value: Number(prompt('Degrees celsius')),
  };
  //b)Find
  // console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// console.log(measureKelvin());

const calcTempAmplituteNew = function (t1, t2) {
  const temps = t1.concat(t2);
  // console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplituteNew = calcTempAmplituteNew(
  [2, 3, 4, 8, 9],
  [10, 11, 26, 'error', '2z']
);
console.log(amplituteNew);
