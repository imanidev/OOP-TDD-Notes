// DRY stands for "Don't Repeat Yourself." It's a principle in software development that promotes code reusability and maintainability by avoiding duplication of code.

Example:

// Without DRY
function calculateRectangleArea(width, height) {
  return width * height;
}

function calculateRectanglePerimeter(width, height) {
  return 2 * (width + height);
}

// With DRY
function calculateRectangle(width, height, operation) {
  if (operation === 'area') {
    return width * height;
  } else if (operation === 'perimeter') {
    return 2 * (width + height);
  }
}

// Usage
const area = calculateRectangle(5, 10, 'area'); // Returns 50
const perimeter = calculateRectangle(5, 10, 'perimeter'); // Returns 30

