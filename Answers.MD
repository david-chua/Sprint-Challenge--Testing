1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

describe() creates a block that groups related test. test() also known as it() is a method which runs a test. The first argument in test is the test name and the second is a function that contains the expectation of the test.

Describe is good when trying to test one function for multiple different cases including edge cases. Test is use whenever you need to run a test for any reason.

1. What is the point of `Test Driven Development`? What do you think about this approach?

The point of Test Driven Development is to develop code based on the specific test cases. It allows you to write code that is bug free as well as it allows refactoring code to be much easier as we know the code works the way it should. It is a tedious approach but definitely one that ensures the program works as flawlessly as what has been tested.


1. Mention three types of automated tests.

3 types of automated testing are unit testing (individual components being tested), integration testing (individual units are combined and tested as a group), and end-to-end testing (test whether the flow of an application behave as expected). 
