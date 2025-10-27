const comparisonOperatorsQuiz = [
  {
    question: "What data type do comparison operators like > or == evaluate to?",
    options: ["Number", "String", "Boolean", "Object"],
    correctAnswer: "Boolean",
  },
  {
    question: "What is the result of the expression (5 > 3) && (10 === 10)?",
    options: ["false", "true", "0", "Error"],
    correctAnswer: "true",
  },
  {
    question: "What is the result of the expression !(10 !== 10)?",
    options: ["false", "true", "0", "Error"],
    correctAnswer: "true",
  },
  {
    question: "Explain short-circuit evaluation in the context of the || operator.",
    options: [
      "Both operands are always evaluated",
      "If the first operand is true, the second is not evaluated",
      "If the first operand is false, the second is ignored",
      "Only numbers are evaluated in the expression",
    ],
    correctAnswer: "If the first operand is true, the second is not evaluated",
  },
  {
    question: "Write a JavaScript expression that checks if a variable num is strictly positive AND less than 100.",
    options: [
      "num > 0 && num < 100",
      "0 < num < 100",
      "num >= 0 || num <= 100",
      "num != 0 && num != 100",
    ],
    correctAnswer: "num > 0 && num < 100",
  },
];

export default comparisonOperatorsQuiz;
