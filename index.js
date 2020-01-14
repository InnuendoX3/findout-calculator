var readline = require('readline');

var rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   //prompt: '> '
 });

/* rl.question('Como es tu nombre? ', (respuesta) => {
   console.log(`Hola ${respuesta}`);
   rl.prompt();
}); */

rl.on('line', (input) => {
   input = input.trim().toLowerCase();
   if (input == "quit") {
      process.exit();   
   }
   console.log(input);
})