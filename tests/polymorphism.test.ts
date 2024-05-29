import Director from '../src/Director';
import Employee from '../src/Employee';
import Manager from '../src/Manager';
import Person from '../src/Person';

describe('Polymorphism', () => {
  it('should support subtype polymorphism (via inheritance)', () => {
    let employee: Employee = new Employee('Felix', 'BE');
    employee = new Manager('Felix', 'BE');
    employee = new Director('Felix', 'BE');
  });

  it('should support ad hoc polymorphism (via interface)', () => {
    function isHaveName(person: Person): boolean {
      return person.name !== undefined;
    }

    function isCanSayHello(person: Person): boolean {
      return (
        person.sayHello !== undefined && typeof person.sayHello === 'function'
      );
    }

    const employee: Employee = new Employee('Felix', 'BE');
    expect(isHaveName(employee)).toBe(true);
    expect(isCanSayHello(employee)).toBe(true);

    const director: Director = new Director('Albert', 'BE');
    expect(isHaveName(director)).toBe(true);
    expect(isCanSayHello(director)).toBe(true);
  });
});
