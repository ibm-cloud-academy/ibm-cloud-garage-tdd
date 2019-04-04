# Set up your project

0. Clone this git repository
    * In your profile > settings > SSH Keys confirm you have set up an SSH Key for Github. If not, then set up SSH access to github. [Connecting to GitHub with SSH](https://help.github.com/enterprise/2.6/user/articles/connecting-to-github-with-ssh/) 

1. Install Node.js (v8.1.4 or above)
	* Mac/Linux: Install nvm from https://github.com/creationix/nvm, then run `nvm use` from your terminal
	* Windows: Download and install Node.js from https://nodejs.org/en/download/

2. From your terminal, run `npm init -y`

# Install Jest

**Jest** is a JavaScript test framework that we can use for testing both front-end and back-end code.

One of Jest's philosophies is to provide an integrated "zero-configuration" experience for writing tests. 
Conveniently, this means that it includes everything you need for TDD in a single package (test runner, assertions, 
matchers, spies, stubs and mocks)

The jest documentation can be found here: https://jestjs.io/docs/en/getting-started

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
        "tdd": "jest --verbose --watch --onlyChanged"
    },
    ```
    
3. Run `npm test`

    This command runs all tests and exits. Typically, we will call this from within the build pipeline.

4. Run `npm run tdd`

    This command continuously watches files for changes and rerun tests related to changed files. 
    This is the command we will be using most often during TDD. 


# Configure pre-commit hooks [Optional]

To prevent bad commits, we can configure pre-commit hooks to ensure that unit tests are run before every commit.

1. Install husky with `npm install --save-dev husky`

2. Modify your `package.json` file, replacing:

    ```
    "scripts": {
        "test": "jest --verbose",
        "tdd": "jest --verbose --watch --onlyChanged"
    },
    
    ```
    
    with
    
    ```
    "scripts": {
        "test": "jest --verbose",
        "tdd": "jest --verbose --watch --onlyChanged",
        "precommit": "npm test"
    },
    
    ```

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
   
3. `it` takes two arguments. The first argument describes the test; the second argument is a function 
   that contains the expectations to test.
   
4. When you're writing tests, you often need to check that values meet certain conditions. 
   `expect` gives you access to a number of "matchers" that let you validate different things.
   
   A good introduction to the available matchers can be found here: https://facebook.github.io/jest/docs/en/using-matchers.html
   
5. Together, the descriptions that we use in the `describe` and `it` blocks are shown in the test output. 
   The aim is to structure and name our tests in such a way that the test output reads like a "requirements spec".   
   

# Let's get started!

Now that you're all set, let's get started with the TDD exercises.

As you go through the TDD exercises, keep in mind the **Four Rules of Simple Design**, 
and the **Transformation Priority Premise**.


## [The Four Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html):

* **_Passes the tests_**
* **_Reveals intention_**
* **_No duplication_**
* **_Fewest elements_**


## [The Transformation Priority Premise](https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html):

```
(01) [{} –> nil] no code => return nil

(02) [nil->constant] nil => simple constant

(03) [constant->constant+] simple constant => complex constant

(04) [constant->scalar] complex constant => variable or an argument

(05) [statement->statements] adding more unconditional statements.

(06) [unconditional->if] splitting the execution path

(07) [scalar->array]

(08) [array->container]

(09) [statement->recursion]

(10) [if->while]

(11) [expression->function] replacing an expression with a function or algorithm

(12) [variable->assignment] replacing the value of a variable.
```


## [Simplified Transformation Priority Premise](https://8thlight.com/blog/micah-martin/2012/11/17/transformation-priority-premise-applied.html):

```
(01) constant => a value

(02) scalar => a local binding, or variable

(03) invocation => calling a function/method

(04) conditional => if/switch/case/cond

(05) while loop => applies to for loops as well

(06) assignment => replacing the value of a variable
```
