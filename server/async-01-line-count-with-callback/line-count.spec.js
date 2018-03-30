const { lineCount } = require('./line-count');

const filename = 'server/async-01-line-count-with-callback/line-count.js';

describe('line count', () => {
  test('for file —— line-count.js —— should be 13', (done) => {
    const onError = (data) => {
      done();
    };
    const onSuccess = (data) => {
      expect(data).toBe(13);
      done();
    };

    expect.hasAssertions();
    lineCount(filename, onError, onSuccess);
  });

  test('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js', (done) => {
    const onError = (data) => {
      expect(data).toBe('problem reading file: is-not-there.js');
      done();
    };
    const onSuccess = (data) => {
      done();
    };

    expect.hasAssertions();
    lineCount('is-not-there.js', onError, onSuccess);
  });
});
