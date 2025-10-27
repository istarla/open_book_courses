const pythonIfStatementQuiz = [
  {
    question: "What is the purpose of the if statement in Python?",
    options: [
      "To execute a block of code only if a specified condition evaluates to True.",
      "To repeat a block of code multiple times.",
      "To define a function in Python.",
      "To handle exceptions in a program."
    ],
    correctAnswer:
      "To execute a block of code only if a specified condition evaluates to True.",
  },
  {
    question:
      "What punctuation mark must end the line containing the if keyword and its condition?",
    options: [";", ":", ".", ","],
    correctAnswer: ":",
  },
  {
    question:
      "How does Python determine which statements belong inside the if block?",
    options: [
      "By using curly braces { }.",
      "By indentation (usually 4 spaces).",
      "By using parentheses ( ).",
      "By ending lines with semicolons."
    ],
    correctAnswer: "By indentation (usually 4 spaces).",
  },
  {
    question:
      'Will the message "Positive number" be printed if x = -5 in the following code? \n\nx = -5\nif x > 0:\n    print("Positive number")',
    options: ["Yes", "No"],
    correctAnswer: "No",
  },
  {
    question:
      'Which of the following values are considered "falsy" in Python?',
    options: [
      "0, '', None, []",
      "1, 'hello', [1, 2]",
      "0, 1, []",
      "None, 'False', '0'"
    ],
    correctAnswer: "0, '', None, []",
  },
];

export default pythonIfStatementQuiz;
