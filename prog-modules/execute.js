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
   let variable = variables.find(({ name }) => name === order.parts[1]);
   if (variable !== undefined) {
      console.log(`${variable.name}: ${variable.value}`);
   } else {
      console.log(`"${order.parts[1]}" is not registered.`);
   }
   
}

function orderRegister(order) {
   
   // Find if variable is already on variables array / taken from Mozilla
   let alreadyVariable = variables.find(({ name }) => name === order.parts[0]);

   if (alreadyVariable !== undefined) {
      if (isSecRegisterValid(order)) {
         makeOperation(order, alreadyVariable)
      } else {
         console.log(`"${order.parts[2]}" is not registered.`);
      }
   } else {

      if (isSecRegisterValid(order)) {
         makeNewRegister(order);
      } else {
         console.log(`"${order.parts[2]}" is not registered.`);
      }

   }
   // console.log(variables);
}

// Make an operation on a new variable and push it
function makeNewRegister(order) {
   let variable = new Variable();

   variable.name = order.parts[0];

   for (const operation of operations) {
      if (order.parts[1] === operation.operation) {
         variable.value = eval(variable.value + operation.operator + numberOrSecRegNumber(order));
      }
   }

   variables.push(variable);
}

// Make an operation with a variable that already exists
function makeOperation(order, aVariable) {
   for (const operation of operations) {
      if (order.parts[1] === operation.operation) {
         aVariable.value = eval(aVariable.value + operation.operator + numberOrSecRegNumber(order));
      }
   }
}

// Return FALSE if second register is not on variables-array and NaN  WORKS!
function isSecRegisterValid(order) {
   let secondRegister = variables.find(({ name }) => name === order.parts[2]);
   return secondRegister !== undefined || !isNaN(order.parts[2]);
}

// Return the second register value or number added by user
function numberOrSecRegNumber(order) {
   let secondRegister = variables.find(({ name }) => name === order.parts[2]);
   if (secondRegister !== undefined) {
      return secondRegister.value;
   } else {
      return Number(order.parts[2]);
   }
}

module.exports = execute;