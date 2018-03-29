describe('the prime factors canary spec', () => {
  test('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a prime factors function should', () => {
  test('return none for 1');
  test('return 2 for 2');
  test('return 3 for 3');
  test('return 2, 2 for 4');
  test('return 5 for 5');
  test('return 2, 3 for 6');
  test('return 7 for 7');
  test('return 2, 2, 2 for 8');
  test('return 3, 3 for 9');
});