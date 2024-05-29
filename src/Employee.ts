import Person from './Person';

class Employee extends Person {
  department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  sayHello(name: string): string {
    return `Hello ${name}, I am an employee of the ${this.department} department.`;
  }
}

export default Employee;
