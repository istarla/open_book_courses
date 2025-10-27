const compoundAssignmentQuiz = [
  {
    question: "What is the purpose of compound assignment operators like += or *=?",
    options: [
      "They are used to declare variables",
      "They provide a shorthand way to perform an operation on a variable's current value and assign the result back to the same variable",
      "They are used to compare two values",
      "They are only for strings"
    ],
    correctAnswer: "They provide a shorthand way to perform an operation on a variable's current value and assign the result back to the same variable"
  },
  {
    question: "If count = 10, what is the value of count after executing count //= 3?",
    options: ["3", "3.33", "10", "0"],
    correctAnswer: "3"
  },
  {
    question: "Rewrite the statement value = value + 5 using a compound assignment operator.",
    options: ["value =+ 5", "value += 5", "value *= 5", "value -= 5"],
    correctAnswer: "value += 5"
  },
  {
    question: 'If text = "abc", what is the value of text after executing text *= 3?',
    options: ['"abc"', '"abcabcabc"', '"abc3"', '"abcabc"'],
    correctAnswer: '"abcabcabc"'
  },
  {
    question: "If price = 50.0, what is the value and type of price after executing price /= 2?",
    options: [
      "Value: 25, Type: int",
      "Value: 25.0, Type: float",
      "Value: 50, Type: int",
      "Value: 50.0, Type: float"
    ],
    correctAnswer: "Value: 25.0, Type: float"
  }
];

export default compoundAssignmentQuiz;
