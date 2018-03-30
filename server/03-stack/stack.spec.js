describe('the stack canary spec', () => {
  test('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe ('a stack', () => {
  test('starts empty');
  test('starts with stack size of 0');
  test('is not empty when pushed');
  test('stack size is 1 when pushed');
  test('stack is empty when pushed and popped');
  test('stack size is 0 when pushed and popped');
  test('overflows');
  test('underflows');
  test('pops the same one item when pushed');
  test('pops the same two items when pushed');
  test('accepts only a positive capacity');
});