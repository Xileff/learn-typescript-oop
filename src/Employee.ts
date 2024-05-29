import Person from './Person';

class Employee extends Person {
  department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
}

export default Employee;
