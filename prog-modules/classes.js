class Order {
   constructor(type, parts, error=false, errorMsg="") {
      this.type = type;
      this.parts = parts;
      this.error = error;
      this.errorMsg = errorMsg;
   }
}

module.exports = Order;