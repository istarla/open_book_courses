// File: set_operations_quiz.js
const setOperationsQuiz = [
  {
    question: "Which set operation combines all unique elements from two sets? What is its operator symbol?",
    options: [
      "Union. Operator: `|`",
      "Intersection. Operator: `&`",
      "Difference. Operator: `-`",
      "Symmetric Difference. Operator: `^`",
    ],
    correctAnswer: "Union. Operator: `|`",
  },
  {
    question: "Which set operation finds elements that are common to both sets? What is its operator symbol?",
    options: [
      "Union. Operator: `|`",
      "Intersection. Operator: `&`",
      "Difference. Operator: `-`",
      "Symmetric Difference. Operator: `^`",
    ],
    correctAnswer: "Intersection. Operator: `&`",
  },
  {
    question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is the result of A - B (difference)?",
    options: [
      "{1, 2, 3, 4, 5}",
      "{3}",
      "{1, 2}",
      "{1, 2, 3}",
    ],
    correctAnswer: "{1, 2}",
  },
  {
    question: "If A = {1, 2, 3} and B = {3, 4, 5}, what is the result of A ^ B (symmetric difference)?",
    options: [
      "{1, 2, 4, 5}",
      "{3}",
      "{1, 2, 3, 4, 5}",
      "{1, 2}",
    ],
    correctAnswer: "{1, 2, 4, 5}",
  },
  {
    question: "What does the method set1.issubset(set2) check?",
    options: [
      "Checks if set2 contains all elements of set1",
      "Checks if set1 contains all elements of set2",
      "Checks if sets have no common elements",
      "Checks if sets are identical",
    ],
    correctAnswer: "Checks if set2 contains all elements of set1",
  },
];

export default setOperationsQuiz;

