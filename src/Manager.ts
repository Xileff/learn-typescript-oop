import Employee from './Employee';

class Manager extends Employee {
  sayHello(name: string): string {
    return `${super.sayHello(name)} And I am your manager.`;
  }
}

export default Manager;
