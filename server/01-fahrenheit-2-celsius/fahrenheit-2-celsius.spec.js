const { fahrenheitToCelcius } = require('./fahrenheit-2-celcius');

describe('the fahrenheit-2-celcius canary spec', () => {
  test('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a fahrenheitToCelcius function should', () => {
  test('return 0 for 32');
  test('return 10 for 50');
  test('return 100 for 212');
  test('return -40 for -40');
  test('return -273.15 for -459.67');
});