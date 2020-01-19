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
      if (isSecRegisterValid(order)) {
         makeOperation(order, allreadyVariable)
         console.log("First esta en variables y second register es un numero o variable VALIDA")
      } else {
         console.log(`${order.parts[2]} does not exist registered.`);
      }
   } else {

      if (isSecRegisterValid(order)) {
         variable.name = order.parts[0];
         variable.value = numberOrSecRegister(order);
         // console.log(variable);
         variables.push(variable);
         // makeOperation(order, allreadyVariable)   ???
         console.log("NO esta en variables y second register es un numero para guardar")
      } else {
         console.log(`${order.parts[2]} does not exist registered.`);
      }

   }
   console.log(variables);

}

// Mini functions for orderRegister
function makeOperation(order, aVariable) {
   for (const operation of operations) {
      if (order.parts[1] === operation.operation) {
         console.log( eval(aVariable.value + operation.operator + numberOrSecRegister(order)) );
         aVariable.value = eval(aVariable.value + operation.operator + numberOrSecRegister(order));
      }
   }
}

// Return FALSE if second register is not on variables-array and NaN  WORKS!
function isSecRegisterValid(order) {
   let secondRegister = variables.find(({ name }) => name === order.parts[2]);

/*    console.log(secondRegister !== undefined)
   console.log(!isNaN(order.parts[2]))
   console.log(secondRegister !== undefined || !isNaN(order.parts[2])) */

   return secondRegister !== undefined || !isNaN(order.parts[2]);
}

// Return the second register value or number added by user
function numberOrSecRegister(order) {
   let secondRegister = variables.find(({ name }) => name === order.parts[2]);
   if (secondRegister !== undefined) {
      return secondRegister.value;
   } else {
      return order.parts[2];
   }
}


module.exports = execute;