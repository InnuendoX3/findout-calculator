const rl = require("./prog-modules/config/readline");

//let operations = 

rl.on("line", (input) => {
   input = input.trim().toLowerCase();
   if (input == "quit") {
      process.exit();
   }

   identifyInput(input);
});

/*  
   Identify if user wants to:
   - Make an register (3 parts)
   - Print (2 parts)
   - Exit (1 part)
   Return 'order' {
      type: register, print or exit
      parts: array with the parts
      error: message on error
   }
 */
function identifyInput(input) {
   let parts = input.split(" ");
   let partsQty = parts.length;
   let order = {};
   switch (partsQty) {
      case 0:
         order.error ="Enter a command. Trying to end the program? Enter: Quit";
      case 1:
         order.type = "exit";
         break;
      case 2:
         order.type = "print";
         break;
      case 3:
         order.type = "register";
         break;
      default:
         order.error = "If you are trying to register follow this systax: <register> <operation> <value>";
         break;
   }

   console.log(order)
   console.log(parts)

/*    for (const part of parts) {
      console.log(part);
   } */
};