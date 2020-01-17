function execute(order) {
   console.log("In execute");
   console.log(order);
   
   switch (order.type) {
      case "exit":
         process.exit(); //funciona
         break;
      case "print":
         // Imprimir
         break;
      case "register":
         // Registrar
         break;  
      default:
         console.log("nada")
         break;
   }
}

module.exports = execute;