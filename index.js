const rl = require("./prog-modules/config/readline");
const validate = require("./prog-modules/validators");


//let operations = 

rl.on("line", (input) => {
   input = input.trim().toLowerCase();
   if (input == "quit") {
      process.exit();
   }

   validate(input);
});



