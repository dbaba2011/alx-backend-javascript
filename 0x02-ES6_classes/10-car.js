const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  cloneCar() {
    return new this.constructor(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
  }
}

export default Car;
