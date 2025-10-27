const tupleQuiz = [
  {
    question: "What is the main difference between a mutable array and an immutable array in JavaScript?",
    options: [
      "Mutable arrays cannot be changed, immutable arrays can",
      "Mutable arrays can be changed, immutable arrays cannot",
      "Both are the same in JavaScript",
      "Immutable arrays allow push() and pop()",
    ],
    correctAnswer: "Mutable arrays can be changed, immutable arrays cannot",
  },
  {
    question: "How do you create an array containing only a single element 42?",
    options: [
      "const arr = 42;",
      "const arr = [42];",
      "const arr = Array(42);",
      "const arr = {42};",
    ],
    correctAnswer: "const arr = [42];",
  },
  {
    question: "Can you use push() on a constant array variable declared with const? Why or why not?",
    options: [
      "No, because const arrays are immutable",
      "Yes, because const only prevents reassignment, not mutation",
      "No, push() only works on let arrays",
      "Yes, but only for numbers",
    ],
    correctAnswer: "Yes, because const only prevents reassignment, not mutation",
  },
  {
    question: "If const arr = ['x', 'y', 'z'], what is the result of arr.slice(1)?",
    options: [
      "['x', 'y']",
      "['y', 'z']",
      "['z']",
      "['x', 'y', 'z']",
    ],
    correctAnswer: "['y', 'z']",
  },
  {
    question: "Give one reason why you might choose to use an immutable array (e.g., Object.freeze(arr)) in JavaScript.",
    options: [
      "To improve performance slightly",
      "To allow push() and pop() safely",
      "To prevent accidental modification and ensure data integrity",
      "To make the array shorter",
    ],
    correctAnswer: "To prevent accidental modification and ensure data integrity",
  },
];

export default tupleQuiz;
