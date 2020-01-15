const rl = require("./prog-modules/config/readline");
const validate = require("./prog-modules/validators");


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
      error: true/false
      errorMsg: message on error
   }
 */
function identifyInput(input) {
   let parts = input.split(" ");
   let partsQty = parts.length;
   let order = {};
   switch (partsQty) {
      case 1:
         order = validate.oneEntry(parts[0]);
         break;
      case 2:
         order = validate.twoEntries(parts);
         break;
      case 3:
         order = validate.threeEntries(parts);
         break;
      default:
         order.error = "If you are trying to register follow this syntax: <register> <operation> <value>";
         break;
   }
   console.log("Nuevo programa")
   console.log(order);
   //console.log(parts)
}

