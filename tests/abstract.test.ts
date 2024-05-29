import Animal from '../src/Animal';
import Dog from '../src/Dog';

describe('Abstract class', () => {
  it('should extend from an abstract class', () => {
    const dog = new Dog('1', 'Lessy');
    expect(dog instanceof Animal).toBe(true);
    expect(dog).toHaveProperty('id'); // concrete prop
    expect(dog).toHaveProperty('name'); // implemented abstract prop
    expect(dog).toHaveProperty('sayHello'); // implemented abstract func
    expect(dog).toHaveProperty('eat'); // concrete func
    expect(dog.sayHello()).toBe('Woof, i am Lessy');
  });
});
