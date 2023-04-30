class Wheel {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

class Container {
  modules: any;

  constructor() {
    this.modules = {};
  }

  provide(key, obj) {
    this.modules[key] = obj;
  }

  get(key) {
    return this.modules[key];
  }
}

class Car {
  private wheel: Wheel;

  constructor(container: Container) {
    this.wheel = container.get('wheel');
  }

  run() {
    console.log(`Car's wheel brand is ${this.wheel.brand}`);
  }
}

const container = new Container();
container.provide('wheel', new Wheel('x'));

new Car(container).run();
