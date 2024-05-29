import Animal from './Animal';

class Dog extends Animal {
  name: string; // implement from abstract class
  constructor(id: string, name: string) {
    super(id);
    this.name = name;
  }

  sayHello(): string {
    return `Woof, i am ${this.name}`;
  }
}

export default Dog;
