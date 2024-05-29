import Employee from '../src/Employee';
import Manager from '../src/Manager';

describe('Method overriding', () => {
  it('should override the method from superclass', () => {
    const employee: Employee = new Employee('Felix', 'BE');
    expect(employee.sayHello('Vincent')).toBe(
      'Hello Vincent, I am an employee of the BE department.',
    );
  });
});

describe('Super method', () => {
  it('should be able to call method from superclass', () => {
    const manager: Manager = new Manager('Albert', 'BE');
    expect(manager.sayHello('Felix')).toBe(
      'Hello Felix, I am an employee of the BE department. And I am your manager.',
    );
  });
});
