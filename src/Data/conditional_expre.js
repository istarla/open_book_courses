const conditionalExpressionsQuiz = [
  {
    question: "What is the primary purpose of a conditional expression (ternary operator)?",
    options: [
      "To repeat code multiple times",
      "To handle multiple conditions using if-elif-else",
      "To provide a concise, single-line syntax for choosing between two values based on a condition",
      "To define a function in one line"
    ],
    correctAnswer: "To provide a concise, single-line syntax for choosing between two values based on a condition"
  },
  {
    question: "What is the general syntax of a conditional expression in Python?",
    options: [
      "if condition then value_if_true else value_if_false",
      "value_if_true if condition else value_if_false",
      "condition ? value_if_true : value_if_false",
      "if-else(condition, value_if_true, value_if_false)"
    ],
    correctAnswer: "value_if_true if condition else value_if_false"
  },
  {
    question: "Rewrite this if-else block using a conditional expression:\n\nif temperature < 0:\n  state = 'Frozen'\nelse:\n  state = 'Not Frozen'",
    options: [
      "state = 'Frozen' if temperature < 0 else 'Not Frozen'",
      "state = 'Frozen' when temperature < 0 otherwise 'Not Frozen'",
      "if temperature < 0 ? 'Frozen' : 'Not Frozen'",
      "temperature < 0 ? state = 'Frozen' : 'Not Frozen'"
    ],
    correctAnswer: "state = 'Frozen' if temperature < 0 else 'Not Frozen'"
  },
  {
    question: "If x = 5, what is the value of y after this statement: y = 10 if x == 5 else 20?",
    options: ["10", "20", "5", "None"],
    correctAnswer: "10"
  },
  {
    question: "Why is it generally discouraged to nest conditional expressions?",
    options: [
      "They reduce code performance",
      "They are slower than normal if statements",
      "They can make code harder to read and understand",
      "They require more memory"
    ],
    correctAnswer: "They can make code harder to read and understand"
  }
];
export default conditionalExpressionsQuiz;

