class Customer {
  readonly id: number;
  name: string = '';
  age?: number = 0;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export default Customer;
