import Employee from '../src/Employee';
import Manager from '../src/Manager';

describe('Instanceof vs typeof', () => {
  it('should use typeof for checking primitive data types', () => {
    expect(typeof 1).toBe('number');
    expect(typeof 'Felix').toBe('string');
  });

  it('should use instanceof for checking object data types', () => {
    const employee: Employee = new Employee('Felix', 'BE');
    expect(employee instanceof Employee).toBe(true);
    expect(employee instanceof Manager).toBe(false);
  });
});
