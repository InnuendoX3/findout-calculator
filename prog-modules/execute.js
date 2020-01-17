/* Variable {
   name: variablename
   content: numbers
} */
let variables = [];

function execute(order) {
   console.log("In execute");
   
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
/*    for (const variable of variables) {
      if (order.parts[0] == variable.variable) {
         variable.content += order.parts[2];
         break;
      }            
   }
   variable.name = order.parts[0];
   variable.content = order.parts[2];
   variables.push(variable)
   console.log("En Function") */
}

module.exports = execute;