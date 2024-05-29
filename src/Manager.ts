import Employee from './Employee';

class Manager extends Employee {
  sayHello(name: string): string {
    return `Hello ${name}, I am the manager of the ${this.department} department.`;
  }
}

export default Manager;
