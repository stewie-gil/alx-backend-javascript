const brandSymbol = Symbol();
const motorSymbol = Symbol();
const colorSymbol = Symbol();

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  cloneCar() {
    const Constructor = this.constructor;
    return new Constructor();
  }
}
