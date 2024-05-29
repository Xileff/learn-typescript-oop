abstract class Animal {
  readonly id: string;
  abstract name: string; // must implement in child class

  constructor(id: string) {
    this.id = id;
  }

  abstract sayHello(name: string): string; // must implement in child class

  eat(): string {
    return `${this.name} is eating`;
  }
}

export default Animal;
