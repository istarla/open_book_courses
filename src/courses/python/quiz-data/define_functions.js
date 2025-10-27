// File: definingFunctionsQuiz.js
const definingFunctionsQuiz = [
  {
    question: "What keyword is used to start the definition of a function in Python?",
    options: [
      "func",
      "function",
      "def",
      "define",
    ],
    correctAnswer: "def",
  },
  {
    question: "What is the difference between a parameter and an argument in the context of functions?",
    options: [
      "They mean the same thing",
      "A parameter is a value passed to a function, while an argument is defined in the function",
      "A parameter is a variable in the function definition, while an argument is the actual value passed when calling the function",
      "A parameter is used only in loops, not functions",
    ],
    correctAnswer:
      "A parameter is a variable in the function definition, while an argument is the actual value passed when calling the function",
  },
  {
    question: "Does defining a function execute the code inside its body? If not, what do you need to do?",
    options: [
      "Yes, it executes automatically upon definition",
      "No, you must call the function using its name followed by parentheses ()",
      "It depends on whether the function has parameters",
      "Only if the function returns a value",
    ],
    correctAnswer: "No, you must call the function using its name followed by parentheses ()",
  },
  {
    question: "What is the purpose of the indented block of code following the 'def' line?",
    options: [
      "It declares global variables",
      "It defines the function's body — the code executed when the function is called",
      "It specifies the function's return type",
      "It marks the end of the function",
    ],
    correctAnswer:
      "It defines the function's body — the code executed when the function is called",
  },
  {
    question: "Which of the following correctly defines a function that prints the square of a number?",
    options: [
      `def print_square(number):\n    print("The square is", number ** 2)`,
      `function print_square(number):\n    print("The square is", number * number)`,
      `def print_square(number):\n    square = number * number\n    print(f"The square of {number} is {square}")`,
      `print_square = (number) => print("The square is", number ** 2)`,
    ],
    correctAnswer: `def print_square(number):\n    square = number * number\n    print(f"The square of {number} is {square}")`,
  },
];

export default definingFunctionsQuiz;
