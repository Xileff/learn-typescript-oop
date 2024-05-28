import Category from '../src/Category';

describe('Category class', () => {
  it('should be able to create category', () => {
    const category: Category = new Category();
    expect(category).toBeInstanceOf(Category);
  });

  it('should be able to call the setter and getter', () => {
    const category: Category = new Category();
    expect(category.name).toBe('empty');
    category.name = 'Handphone';
    expect(category.name).toEqual('Handphone');
    category.name = 'Gadget';
    expect(category.name).toEqual('Gadget');
  });
});
