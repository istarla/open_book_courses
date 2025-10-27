const pythonArithmeticQuiz = [
  {
    question: "What is the result of the expression 10 % 3?",
    options: ["3", "0", "1", "10"],
    correctAnswer: "1",
  },
  {
    question: "What is the difference between the / operator and the // operator?",
    options: [
      "/ performs integer division; // performs float division",
      "/ performs standard division (float), while // performs floor division (rounds down)",
      "Both perform the same operation",
      "/ divides and rounds up, // divides and rounds down",
    ],
    correctAnswer:
      "/ performs standard division (float), while // performs floor division (rounds down)",
  },
  {
    question: "What is the value of result after executing result = 3 + 4 * 2 ** 2?",
    options: ["28", "19", "22", "11"],
    correctAnswer: "19",
  },
  {
    question:
      "Which operator has the highest precedence among the arithmetic operators?",
    options: ["*", "/", "%", "**"],
    correctAnswer: "**",
  },
  {
    question: "Write a Python expression to calculate 5 raised to the power of 4.",
    options: ["5 ^ 4", "pow(5, 4)", "5 ** 4", "5 * 4"],
    correctAnswer: "5 ** 4",
  },
];

export default pythonArithmeticQuiz;
