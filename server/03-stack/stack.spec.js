describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a stack', () => {
  it('starts empty');
  it('starts with stack size of 0');
  it('is not empty when pushed');
  it('stack size is 1 when pushed');
  it('stack is empty when pushed and popped');
  it('stack size is 0 when pushed and popped');
  it('throws overflow error when pushing to a stack at full capacity');
  it('throw underflow error when popping an empty stack');
  it('pops the same one item when pushed');
  it('pops two items with the most recent first');
  it('accepts only a positive capacity');
});