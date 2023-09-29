import Car from "./10-car.js";

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const carClone = new Car(this._brand, this._motor, this._color);
    return carClone;
  }
}

export default EVCar;
