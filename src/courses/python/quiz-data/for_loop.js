// src/Data/for_loop.js

const for_loop = [
  {
    question: "What is the main purpose of a for loop in Python?",
    options: [
      "To execute a block of code only once",
      "To execute a block of code repeatedly for each item in a sequence or a number of times",
      "To terminate a program",
      "To handle exceptions in a program"
    ],
    correctAnswer:
      "To execute a block of code repeatedly for each item in a sequence or a number of times"
  },
  {
    question:
      'In the statement for letter in "Hi":, what is "Hi" called? What values will the variable letter take?',
    options: [
      '"Hi" is a function, and letter will take the values H and i',
      '"Hi" is the iterable, and letter will take H in the first iteration and i in the second',
      '"Hi" is a list, and letter will take only H',
      '"Hi" is a constant value with no iteration'
    ],
    correctAnswer:
      '"Hi" is the iterable, and letter will take H in the first iteration and i in the second'
  },
  {
    question: "What sequence of numbers does range(2, 9, 3) generate?",
    options: ["2, 5, 8", "2, 4, 6, 8", "3, 6, 9", "2, 5, 7, 9"],
    correctAnswer: "2, 5, 8"
  },
  {
    question: "Write a for loop that prints the numbers 0, 1, 2.",
    options: [
      "for i in range(3): print(i)",
      "for i in range(1, 3): print(i)",
      "for i in [0, 1, 2, 3]: print(i)",
      "for i in range(0): print(i)"
    ],
    correctAnswer: "for i in range(3): print(i)"
  },
  {
    question:
      "What is the term for an object that a for loop can iterate over (like a string or the result of range())?",
    options: ["Iterator", "Generator", "Iterable", "Sequence"],
    correctAnswer: "Iterable"
  }
];

export default for_loop;
