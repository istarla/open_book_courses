const dictionaryIterationQuiz = [
  {
    question:
      "If you iterate through an object using for (let key in myObj), what does the loop variable key represent in each iteration?",
    options: [
      "Each key of the object",
      "Each value of the object",
      "Both key and value",
      "Only the index of the key",
    ],
    correctAnswer: "Each key of the object",
  },
  {
    question:
      "Which method is preferred for iterating when you need both the key and the value in each iteration, and how do you typically use it in a for loop?",
    options: [
      "Object.entries(myObj) — used with destructuring: for (const [key, value] of Object.entries(myObj))",
      "Object.keys(myObj) — used directly for values",
      "Object.values(myObj) — gives both keys and values",
      "myObj.forEach() — works directly on objects",
    ],
    correctAnswer:
      "Object.entries(myObj) — used with destructuring: for (const [key, value] of Object.entries(myObj))",
  },
  {
    question: "Can an object value be another object? What is this structure called?",
    options: [
      "No, object values must be primitive",
      "Yes, it's called a nested object",
      "Yes, it's called a deep array",
      "Only arrays can be nested, not objects",
    ],
    correctAnswer: "Yes, it's called a nested object",
  },
  {
    question:
      'Given const nested = { outer: { inner: 100 } }, how do you access the value 100?',
    options: [
      'nested.outer.inner',
      'nested["outer"]["inner"]',
      'Both A and B work',
      'nested.inner.outer',
    ],
    correctAnswer: "Both A and B work",
  },
  {
    question:
      "Why is it generally unsafe to add or remove keys from an object while iterating over it directly using for...in?",
    options: [
      "It can cause unexpected behavior because the iteration order and state may change during looping",
      "It throws a syntax error",
      "It deletes all keys automatically",
      "JavaScript doesn't allow object modification at all",
    ],
    correctAnswer:
      "It can cause unexpected behavior because the iteration order and state may change during looping",
  },
];

export default dictionaryIterationQuiz;
