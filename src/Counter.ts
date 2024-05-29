class Counter {
  protected num: number = 0;

  public increment() {
    this.num++;
  }

  public getNum(): number {
    return this.num;
  }
}

export default Counter;
