const questions = [
  {
    question: "1. How do you specify a default value for a parameter in a function definition?",
    options: [
      "A) By using the assignment operator (=) after the parameter name.",
      "B) By writing 'default(param)' in the function.",
      "C) By adding a colon ':' after the parameter name.",
      "D) By specifying defaults in the function call only."
    ],
    correctAnswer: "A) By using the assignment operator (=) after the parameter name."
  },
  {
    question: "2. In a function definition, where must parameters with default values be placed relative to parameters without default values?",
    options: [
      "A) Before all non-default parameters",
      "B) After all non-default parameters",
      "C) Anywhere, order doesn’t matter",
      "D) Inside curly braces"
    ],
    correctAnswer: "B) After all non-default parameters"
  },
  {
    question: "3. If you define `function func(a, b = 10) {}`, which of the following calls are valid?",
    options: [
      "A) func(5)",
      "B) func(5, 20)",
      "C) func(a = 1, b = 2)",
      "D) func(b = 50)"
    ],
    correctAnswer: "A) func(5)"
  },
  {
    question: "4. Why should you be cautious when using a mutable object (like a list or array) as a default argument value?",
    options: [
      "A) It makes your code faster but less readable.",
      "B) Because the default mutable object is created only once and reused between calls.",
      "C) It causes a syntax error in JavaScript.",
      "D) Mutable objects cannot be used as defaults at all."
    ],
    correctAnswer: "B) Because the default mutable object is created only once and reused between calls."
  },
  {
    question: "5. What is the recommended way to ensure a new empty list (or array) is created every time a function is called?",
    options: [
      "A) Use an empty array [] directly as a default.",
      "B) Set default to None (Python) or undefined (JS) and create inside function if needed.",
      "C) Use a global variable to store the array.",
      "D) Reassign the default value at runtime."
    ],
    correctAnswer: "B) Set default to None (Python) or undefined (JS) and create inside function if needed."
  }
];

export default questions;
