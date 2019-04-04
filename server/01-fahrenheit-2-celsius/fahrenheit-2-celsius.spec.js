// eslint-disable-next-line no-unused-vars
const { fahrenheitToCelcius } = require('./fahrenheit-2-celcius');

describe('the fahrenheit-2-celcius canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a fahrenheitToCelcius function should', () => {
  it.todo('return 0 for 32');
  it.todo('return 10 for 50');
  it.todo('return 100 for 212');
  it.todo('return -40 for -40');
  it.todo('return -273.15 for -459.67');
});