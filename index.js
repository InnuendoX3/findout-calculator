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
         order = validateOneEntry(parts[0]);
         break;
      case 2:
         order = validateTwoEntries(parts);
         break;
      case 3:
         order = validateThreeEntries(parts);
         break;
      default:
         order.error = "If you are trying to register follow this syntax: <register> <operation> <value>";
         break;
   }

   console.log(order)
   //console.log(parts)
}

function validateOneEntry(entry) {
   let order = {};
   if (entry == "quit2") {
      order.type = "exit";
      order.error = false;
   } else {
      order.error = true;
      order.errorMsg = "To end the program type: Quit"
   }

   return order;
}

function validateTwoEntries(entries) {
   let order = {};
   order.parts = entries;
   if (entries[0] == "print") {
      order.type = "print";      
      order.error = false;
   } else {
      order.error = true;
      order.errorMsg = 'To see a register value type: Print <register>';
   }

   return order;
}

function validateThreeEntries(entries) {
   let order = {};
   order.parts = entries;
   if (entries[1] == "add") {
      order.type = "operation";
      order.error = false;
   } else {
      order.error = true;
      order.errorMsg = 'To add to a register follow this syntax: <register> add <value>';
   }

   return order;
}