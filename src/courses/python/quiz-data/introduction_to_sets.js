const setBasicsQuiz = [
  {
    question: "What are the two defining characteristics of a JavaScript Set?",
    options: [
      "It is ordered and allows duplicate elements",
      "It is unordered and contains only unique elements",
      "It allows duplicates and maintains insertion order",
      "It is immutable and unordered",
    ],
    correctAnswer: "It is unordered and contains only unique elements",
  },
  {
    question: "How do you create an empty Set in JavaScript?",
    options: [
      "const mySet = {};",
      "const mySet = [];",
      "const mySet = new Set();",
      "const mySet = Set[];",
    ],
    correctAnswer: "const mySet = new Set();",
  },
  {
    question:
      "If you create a Set using const mySet = new Set([10, 20, 10, 30, 20]), what will mySet contain?",
    options: [
      "{10, 20, 10, 30, 20}",
      "{10, 20, 30}",
      "[10, 20, 30]",
      "It throws an error because of duplicates",
    ],
    correctAnswer: "{10, 20, 30}",
  },
  {
    question:
      "Which method removes an element from a Set but does not raise an error if the element is not found?",
    options: ["delete()", "remove()", "discard()", "pop()"],
    correctAnswer: "delete()",
  },
  {
    question:
      "What is the primary advantage of using the has() method to check for membership in a Set compared to using includes() in an array?",
    options: [
      "has() is slower but more accurate",
      "Membership testing with has() is significantly faster for Sets than includes() for arrays, especially for large collections",
      "They perform the same operation with equal speed",
      "includes() can check any data type, but has() cannot",
    ],
    correctAnswer:
      "Membership testing with has() is significantly faster for Sets than includes() for arrays, especially for large collections",
  },
];

export default setBasicsQuiz;
