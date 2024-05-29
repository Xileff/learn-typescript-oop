import Employee from '../src/Employee';
import Manager from '../src/Manager';

describe('Method overriding', () => {
  it('should override the method from superclass', () => {
    const employee: Employee = new Employee('Felix', 'BE');
    expect(employee.sayHello('Vincent')).toBe(
      'Hello Vincent, I am an employee of the BE department.',
    );
    const manager: Manager = new Manager('Albert', 'BE');
    expect(manager.sayHello('Felix')).toBe(
      'Hello Felix, I am the manager of the BE department.',
    );
  });
});
