import Configuration from '../src/Configuration';

describe('Static properties', () => {
  it('should support static props', () => {
    expect(Configuration.NAME).toBeDefined();
    expect(Configuration.VERSION).toBeDefined();
    expect(Configuration.AUTHOR).toBeDefined();
  });
});
