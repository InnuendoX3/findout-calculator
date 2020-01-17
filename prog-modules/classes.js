class Order {
   constructor(type, parts, error=false, errorMsg="") {
      this.type = type;
      this.parts = parts;
      this.error = error;
      this.errorMsg = errorMsg;
   }
}

class Variable {
   constructor(name, value) {
      this.name = name;
      this.value = 0;
   }
}

module.exports = {Order, Variable};