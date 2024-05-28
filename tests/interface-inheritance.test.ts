import Person from '../src/Person';

describe('Interface inheritance', () => {
  it('should support interface inheritance', () => {
    const person: Person = new Person('Felix');
    expect(person).toHaveProperty('name');
    expect(person.name).toEqual('Felix');
    expect(person).toHaveProperty('sayHello');
    expect(person.sayHello).toBeInstanceOf(Function);
    expect(person.sayHello('Vincent')).toEqual(
      'Hello Vincent, my name is Felix',
    );
  });
});
