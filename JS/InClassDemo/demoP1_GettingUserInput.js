const prompt = require('prompt-sync')();

let name = prompt('What is your name: ');
let degree = prompt('What is your degree program: ');

console.log("Hello " + name + " it looks like you are getting a degree in " + degree + ". Congratulations!");