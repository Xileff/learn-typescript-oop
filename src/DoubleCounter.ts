import Counter from './Counter';

class DoubleCounter extends Counter {
  public increment(): void {
    this.num += 2;
  }
}

export default DoubleCounter;
