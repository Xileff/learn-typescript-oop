import { MathUtil, StringUtil } from '../src/utils';

describe('Namespace', () => {
  it('should support namespace grouping', () => {
    expect(MathUtil.sum(1, 2, 3, 4, 5)).toStrictEqual(15);
    expect(StringUtil.isPalindrome('Kasur Rusak')).toBe(true);
  });
});
