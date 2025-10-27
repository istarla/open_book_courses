const operatorsQuiz = [
  {
    question: "What data type do comparison operators like > or == evaluate to?",
    options: ["String", "Integer", "Boolean", "Float"],
    correctAnswer: "Boolean",
  },
  {
    question: "What is the result of the expression (5 > 3) and (10 == 10)?",
    options: ["True", "False", "None", "Error"],
    correctAnswer: "True",
  },
  {
    question: "What is the result of the expression not (10 != 10)?",
    options: ["True", "False", "None", "Error"],
    correctAnswer: "True",
  },
  {
    question: "Explain short-circuit evaluation in the context of the or operator.",
    options: [
      "Python always evaluates both operands.",
      "If the first operand is True, Python skips evaluating the second.",
      "If the first operand is False, Python skips the second.",
      "Python randomly chooses which operand to evaluate first.",
    ],
    correctAnswer:
      "If the first operand is True, Python skips evaluating the second.",
  },
  {
    question:
      "Write a Python expression that checks if a variable num is strictly positive (greater than 0) AND less than 100.",
    options: [
      "num > 0 and num < 100",
      "num >= 0 or num <= 100",
      "num < 0 and num > 100",
      "num == 0 and num == 100",
    ],
    correctAnswer: "num > 0 and num < 100",
  },
];

export default operatorsQuiz;
