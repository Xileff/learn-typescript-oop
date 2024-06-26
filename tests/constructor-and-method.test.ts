import Customer from '../src/Customer';

describe('Customer', () => {
  it('should create a customer', () => {
    const customer: Customer = new Customer(1, 'Felix');
    expect(customer).toBeInstanceOf(Customer);
    expect(customer).toHaveProperty('id');
    expect(customer.id).toBe(1);
    expect(customer).toHaveProperty('name');
    expect(customer.name).toBe('Felix');
    expect(customer.age).toBe(0);

    customer.age = 22;
    expect(customer).toHaveProperty('age');
    expect(customer.age).toBe(22);
    expect(customer.age).toBe(22);
  });

  it('should be able to call method', () => {
    const customer: Customer = new Customer(1, 'Felix');
    expect(customer).toHaveProperty('sayHello');
    expect(customer.sayHello).toBeInstanceOf(Function);
    expect(customer.sayHello('Vincent')).toEqual(
      'Hello Vincent, my name is Felix',
    );
  });
});
