const rl = require("./prog-modules/config/readline");
const validate = require("./prog-modules/validators");
const execute = require('./prog-modules/execute');


rl.on("line", (input) => {
   input = input.trim().toLowerCase();

   let order = validate(input);
   if (order.error) {
      console.log(order.errorMsg);
   } else {
      execute(order);
      // console.log("Ejecutar accion");
   }


   // Read validate() search for errors first, 
   // then execute the order
   // Make a register function

});



