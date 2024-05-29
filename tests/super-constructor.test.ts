import Employee from '../src/Employee';
import Person from '../src/Person';

describe('Super constructor', () => {
  it('should support super constructor', () => {
    const employee = new Employee('Felix', 'BE');
    expect(employee).toBeInstanceOf(Person);
    expect(employee).toBeInstanceOf(Employee);
    expect(employee).toHaveProperty('name');
    expect(employee.name).toBe('Felix');
    expect(employee).toHaveProperty('department');
    expect(employee.department).toBe('BE');
  });
});
