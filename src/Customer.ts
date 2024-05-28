class Customer {
  readonly id: number;
  name: string = '';
  age?: number = 0;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello(name: string): string {
    return `Hello ${name}, my name is ${this.name}`;
  }
}

export default Customer;
