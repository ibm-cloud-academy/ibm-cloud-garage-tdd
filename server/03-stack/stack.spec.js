describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe ('a stack', () => {
  it('starts empty');
  it('starts with stack size of 0');
  it('is not empty when pushed');
  it('stack size is 1 when pushed');
  it('stack is empty when pushed and popped');
  it('stack size is 0 when pushed and popped');
  it('overflows');
  it('underflows');
  it('pops the same one item when pushed');
  it('pops the same two items when pushed');
  it('accepts only a positive capacity');
});