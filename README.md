# Set up your project

1. Install Node.js (v8.1.4 or above)

2. From your terminal, run `npm init`

3. Just accept all the defaults


# Install Jest

**Jest** is a JavaScript test framework that we can use for testing both front-end and back-end code.

One of Jest's philosophies is to provide an integrated "zero-configuration" experience for writing tests. 
Conveniently, this means that it includes everything you need for TDD in a single package (test runner, assertions, 
matchers, spies, stubs and mocks)

The API reference for jest can be found here: https://facebook.github.io/jest/docs/en/api.html

1. Install jest with `npm install --save-dev jest`

2. Modify your `package.json` file, replacing:

    ```
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
    
    ```
    
    with
    
    ```
      "scripts": {
        "test": "jest --verbose",
        "tdd": "jest --verbose --watch"
      },
    ```
    
3. Run `npm test`

    This command runs all tests and exits. Typically, we will call this from within the build pipeline.

4. Run `npm run tdd`

    This command continuously watches files for changes and rerun tests related to changed file source files. 
    This is the command we will be using most often during TDD. 


# Configure your IDE [Optional]

## IntelliJ

In Preferences:

1. Under Language & Frameworks > JavaScript, set your JavaScript language version to "ECMAScript 6".

2. Under Language & Frameworks > JavaScript > Libraries, download and enable both `jest` and `node`.


# Explore the canary test

Open up `server/00-canary/canary.spec.js`, and note that:

1. For jest to find your tests, you need to place your tests in a `__tests__` folder, 
   or name your test files with a `.spec.js` or `.test.js` extension.
   
2. `describe` creates a block that groups together several related tests in one "test suite".

   You can also nest `describe` blocks if you have a hierarchy of tests.
   
3. `test` takes two arguments. The first argument describes the test; the second argument is a function 
   that contains the expectations to test.
   
4. When you're writing tests, you often need to check that values meet certain conditions. 
   `expect` gives you access to a number of "matchers" that let you validate different things.
   
   A good introduction to the available matchers can be found here: https://facebook.github.io/jest/docs/en/using-matchers.html
   
5. Together, the descriptions that we use in the `describe` and `test` blocks are shown in the test output. 
   The aim is to structure and name our tests in such a way that the test output reads like a "requirements spec".   
   

# Let's get started!

Now that you're all set, let's get started with our TDD exercises!
