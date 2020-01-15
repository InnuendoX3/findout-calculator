//const operations = require("./prog-modules/operations");

function oneEntry(entry) {
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

function twoEntries(entries) {
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

function threeEntries(entries) {
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

module.exports = {oneEntry, twoEntries, threeEntries}