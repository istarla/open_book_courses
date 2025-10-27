const argsKwargsQuiz = [
  {
    question: "1. What does the *args syntax in a function definition allow, and what type of object does args become inside the function?",
    options: [
      "A) It allows arbitrary keyword arguments; becomes a dictionary.",
      "B) It allows arbitrary positional arguments; becomes an array (or tuple in Python).",
      "C) It allows only fixed arguments; becomes a list.",
      "D) It allows no arguments; becomes undefined."
    ],
    correctAnswer: "B) It allows arbitrary positional arguments; becomes an array (or tuple in Python)."
  },
  {
    question: "2. What does the **kwargs syntax in a function definition allow, and what type of object does kwargs become inside the function?",
    options: [
      "A) It allows arbitrary keyword arguments; becomes an object (or dictionary in Python).",
      "B) It allows arbitrary positional arguments; becomes an array.",
      "C) It allows fixed arguments; becomes a string.",
      "D) It disallows any keyword arguments."
    ],
    correctAnswer: "A) It allows arbitrary keyword arguments; becomes an object (or dictionary in Python)."
  },
  {
    question: "3. In the function definition `function func(a, ...args, b = 10, ...kwargs)`, what type of parameter is b?",
    options: [
      "A) A positional argument",
      "B) A keyword-only argument",
      "C) A rest argument",
      "D) A required argument"
    ],
    correctAnswer: "B) A keyword-only argument"
  },
  {
    question: "4. If you define `function test(...args) { console.log(args); }` and call `test(10, 'a', true)`, what will be printed?",
    options: [
      "A) 10, 'a', true",
      "B) ['10', 'a', 'true']",
      "C) [10, 'a', true]",
      "D) (10, 'a', true)"
    ],
    correctAnswer: "C) [10, 'a', true]"
  },
  {
    question: "5. If you define `function test2(**kwargs) { console.log(kwargs); }` and call `test2({ name: 'X', value: 100 })`, what will be printed?",
    options: [
      "A) ['X', 100]",
      "B) { name: 'X', value: 100 }",
      "C) ('X', 100)",
      "D) 'name: X, value: 100'"
    ],
    correctAnswer: "B) { name: 'X', value: 100 }"
  }
];

export default argsKwargsQuiz;
