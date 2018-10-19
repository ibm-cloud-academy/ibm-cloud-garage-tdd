const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

const lineCount = filename => {
  const onSuccess = data => data.split("\n").length;
  const onError = () =>
    Promise.reject(new Error("problem reading file: " + filename));

  return readFile(filename, "UTF-8")
    .then(onSuccess)
    .catch(onError);
};

module.exports = { lineCount };
