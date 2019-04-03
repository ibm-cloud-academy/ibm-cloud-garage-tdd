describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a stack', () => {
  it.todo('starts empty');
  it.todo('starts with stack size of 0');
  it.todo('is not empty when pushed');
  it.todo('stack size is 1 when pushed');
  it.todo('stack is empty when pushed and popped');
  it.todo('stack size is 0 when pushed and popped');
  it.todo('throws overflow error when pushing to a stack at full capacity');
  it.todo('throw underflow error when popping an empty stack');
  it.todo('pops the same one item when pushed');
  it.todo('pops two items with the most recent first');
  it.todo('accepts only a positive capacity');
});