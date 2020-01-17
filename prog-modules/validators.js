const operations = require("./operations");

/* --------------------------- 
   Divide user input in parts:
   - 3 parts: Make a register
   - 2 parts: Print
   - 1 part:  Exit
   Return 'order' {
      type: register, print or exit
      parts: array with the parts
      error: true/false
      errorMsg: message on error
   }
 ------------------------------ */
 
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

   return order;
   // console.log(order);
}


function validateOneEntry(entry) {
   let order = {};
   order.parts = entry;
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

   for (const op of operations) {
      if (entries[1] == op.operation) {
         order.type = "register";
         order.error = false;
         return order;
      }
   }

   order.error = true;
   order.errorMsg = "To make a register use an operation word: Add, Subtract or Multiply";

   return order;
}

module.exports = identifyInput;