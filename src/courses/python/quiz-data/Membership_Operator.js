const membershipIdentityQuiz = [
  {
    question: "What is the output of 'p' in 'python'?",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "true"
  },
  {
    question: "If x = [1, 2, 3] and y = [1, 2, 3], is x === y true or false? Why?",
    options: [
      "True, because both have the same values",
      "False, because they are two separate objects in memory",
      "True, because arrays are compared by value",
      "False, because arrays cannot be compared"
    ],
    correctAnswer: "False, because they are two separate objects in memory"
  },
  {
    question: "What is the value of 'a' not in 'banana'?",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "false"
  },
  {
    question: 'If a = "hello" and b = a, what is the output of a === b?',
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: "true"
  }
];

export default membershipIdentityQuiz;
