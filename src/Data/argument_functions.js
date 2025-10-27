// File: functionArgumentsQuiz.js
const functionArgumentsQuiz = [
  {
    question: "In the function definition 'def greet(name, message):', what are 'name' and 'message' called?",
    options: [
      "Arguments",
      "Parameters",
      "Keywords",
      "Return values",
    ],
    correctAnswer: "Parameters",
  },
  {
    question: "In the function call 'greet(\"World\", \"Hello\")', what are 'World' and 'Hello' called?",
    options: [
      "Parameters",
      "Arguments",
      "Variables",
      "Keywords",
    ],
    correctAnswer: "Arguments",
  },
  {
    question: "When using positional arguments, how does Python determine which argument corresponds to which parameter?",
    options: [
      "By the order (position) in which they appear",
      "By their data type",
      "By alphabetical order",
      "By default values assigned",
    ],
    correctAnswer: "By the order (position) in which they appear",
  },
  {
    question: "How do you specify a keyword argument when calling a function? (Example: using 'greet' function)",
    options: [
      "By placing the value before the parameter name",
      "By using the parameter name followed by an equals sign and the value",
      "By wrapping parameters in parentheses",
      "By passing arguments in any order without specifying names",
    ],
    correctAnswer: "By using the parameter name followed by an equals sign and the value",
  },
  {
    question: "Can you place a positional argument after a keyword argument in a function call?",
    options: [
      "Yes, but only if both are strings",
      "Yes, if the keyword argument has a default value",
      "No, positional arguments must always come before keyword arguments",
      "It depends on the interpreter",
    ],
    correctAnswer: "No, positional arguments must always come before keyword arguments",
  },
];

export default functionArgumentsQuiz;
