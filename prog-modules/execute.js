const classes = require("./classes");
const operations = require("./operations");
const Variable = classes.Variable;

/* Variable {
   name:
   value:
} */

let variables = [];

function execute(order) {
   // console.log(order);
   switch (order.type) {
      case "exit":
         process.exit(); //funciona
         break;
      case "print":
         orderPrint(order);
         break;
      case "register":
         orderRegister(order);
         break;  
      default:
         console.log("nada")
         break;
   }
}

function orderExit(order) {
   process.exit();
}

function orderPrint(order) {
   console.log(`${order.parts[1]} esta siendo impresa`);
}

function orderRegister(order) {
   let variable = new Variable();

   // Find if variable is already on variables array / taken from Mozilla
   let allreadyVariable = variables.find(({ name }) => name === order.parts[0]);

   if (allreadyVariable !== undefined) {
      //makeOperation(order, allreadyVariable)
      console.log("esta en variables")

   } else {
      console.log("no esta en variables")
      variable.name = order.parts[0];
      variable.value = secondRegisterOrNumber(order);
      console.log(variable);
      variables.push(variable);
   }
   console.log(variables);

}

// Mini functions for orderRegister
function makeOperation(order, avariable) {
   for (const operation of operations) {
      if (order.parts[1] === operation.operation) {
         avariable.value = avariable.value + order.parts[2];
      }
   }
}

function secondRegisterOrNumber(order) {
   // Controling the thrid part
   if (isNaN(order.parts[2])) {
      // If second register exists return its value
      var variableToUse = variables.find(({ name }) => name === order.parts[2]);
      if (variableToUse != undefined) {
         console.log(variableToUse.value)
         return variableToUse.value
      } else {
         console.log(`${order.parts[2]} does not exist.`)
         // salir de la funcion sin seguir
      }
   } else {
      return Number(order.parts[2]);
   }
}

module.exports = execute;