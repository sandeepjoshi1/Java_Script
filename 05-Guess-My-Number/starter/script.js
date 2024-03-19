'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 16;
document.querySelector('.score').textContent = 12;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 26;
