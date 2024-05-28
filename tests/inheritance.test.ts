import Director from '../src/Director';
import Employee from '../src/Employee';
import Manager from '../src/Manager';

describe('Director class', () => {
  it('should extend from Employee class', () => {
    const director: Director = new Director('Felix');
    expect(director).toBeInstanceOf(Director);
    expect(director).toBeInstanceOf(Manager);
    expect(director).toBeInstanceOf(Employee);
  });

  it('should be able to set and get name', () => {
    const director: Director = new Director('');
    expect(director.name).toEqual('');
    director.name = 'Felix';
    expect(director.name).toEqual('Felix');
  });
});
