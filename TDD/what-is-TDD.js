//TDD stands for Test-Driven Development. It's a software development process where you write tests for your code before you actually write the code itself. Here's a simple breakdown:

/*
1. Write a Test: First, you write a test that describes what you want your code to do. This test initially fails because you haven't written the code yet. (RED)

2. Write the Code: Then, you write the minimum amount of code needed to make the test pass. You're essentially writing code to fulfill the requirements of the test. (GREEN)

3. Refactor (Optional): Once the test passes, you can refactor your code to make it cleaner, more efficient, or more maintainable. This step ensures that your code remains high quality.
*/

//Test

Example: test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

// Code

function add(a, b) {
  return a + b;
}
