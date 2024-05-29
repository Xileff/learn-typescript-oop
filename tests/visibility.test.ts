import Counter from '../src/Counter';
import DoubleCounter from '../src/DoubleCounter';

describe('Visibility', () => {
  it('should support visibility', () => {
    const counter: Counter = new Counter();
    expect(counter.getNum()).toEqual(0);
    counter.increment();
    expect(counter.getNum()).toEqual(1);
  });

  it('subclass should be able to access protected parent property', () => {
    const doubleCounter: DoubleCounter = new DoubleCounter();
    expect(doubleCounter.getNum()).toEqual(0);
    doubleCounter.increment();
    expect(doubleCounter.getNum()).toEqual(2);
  });
});
