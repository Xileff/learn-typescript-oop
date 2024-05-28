class Category {
  _name?: string;

  get name(): string {
    return this._name ? this._name : 'empty';
  }

  set name(name: string) {
    if (name !== '') {
      this._name = name;
    }
  }
}

export default Category;
