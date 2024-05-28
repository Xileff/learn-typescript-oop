import CanSayHello from './CanSayHello';
import HasName from './HasName';

class Person implements HasName, CanSayHello {
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  sayHello(name: string): string {
    return `Hello ${name}, my name is ${this._name}`;
  }
}

export default Person;
