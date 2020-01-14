var readline = require('readline');

var rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   prompt: '> '
 });

rl.question('Como es tu nombre? ', (respuesta) => {
   console.log(`Hola ${respuesta}`);
   rl.prompt();
});