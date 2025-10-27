const iterablesIteratorsQuiz = [
  {
    question: "1. What makes an object an 'iterable' in JavaScript?",
    options: [
      "A) It has a next() method",
      "B) It has a Symbol.iterator method",
      "C) It is a JSON object",
      "D) It’s declared with let or const"
    ],
    correctAnswer: "B) It has a Symbol.iterator method"
  },
  {
    question: "2. What two key methods define the iterator protocol in JavaScript? What does each do?",
    options: [
      "A) Symbol.iterator() and next()",
      "B) next() and prev()",
      "C) get() and set()",
      "D) iterator() and return()"
    ],
    correctAnswer: "A) Symbol.iterator() and next()"
  },
  {
    question: "3. What built-in function or symbol is used to explicitly get an iterator from an iterable?",
    options: [
      "A) iter()",
      "B) iterator()",
      "C) Symbol.iterator",
      "D) next()"
    ],
    correctAnswer: "C) Symbol.iterator"
  },
  {
    question: "4. What method is used to explicitly get the next item from an iterator?",
    options: [
      "A) next()",
      "B) pop()",
      "C) shift()",
      "D) advance()"
    ],
    correctAnswer: "A) next()"
  },
  {
    question: "5. What property in the iterator’s result object indicates that there are no more items? How does for...of handle it?",
    options: [
      "A) complete",
      "B) finished",
      "C) done",
      "D) stop"
    ],
    correctAnswer: "C) done"
  }
];

export default iterablesIteratorsQuiz;
