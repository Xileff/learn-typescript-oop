import CanSayHello from './CanSayHello';
import HasName from './HasName';

class Person implements HasName, CanSayHello {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(name: string): string {
    return `Hello ${name}, my name is ${this.name}`;
  }
}

export default Person;
