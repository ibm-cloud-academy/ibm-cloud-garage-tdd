const fs = require('fs-promise');

const lineCount = filename => {
  const onSuccess = data => Promise.resolve(data.toString().split('\n').length);
  const onError = () => Promise.reject(new Error('problem reading file: ' + filename));

  return fs.readFile(filename)
    .then(onSuccess)
    .catch(onError);
};

module.exports = { lineCount };