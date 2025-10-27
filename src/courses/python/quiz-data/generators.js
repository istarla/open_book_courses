const generatorsQuiz = [
  {
    question: "1. What keyword is used inside a function to make it a generator function?",
    options: [
      "A) return",
      "B) yield",
      "C) async",
      "D) await"
    ],
    correctAnswer: "B) yield"
  },
  {
    question: "2. What does calling a generator function return?",
    options: [
      "A) A Promise object",
      "B) A list of all yielded values",
      "C) A generator object (which is a type of iterator)",
      "D) A normal function result"
    ],
    correctAnswer: "C) A generator object (which is a type of iterator)"
  },
  {
    question: "3. What happens to a generator function's execution when a yield statement is encountered?",
    options: [
      "A) The function immediately terminates",
      "B) The function restarts from the beginning",
      "C) The function pauses, returns the yielded value, and resumes later from the same point",
      "D) It skips to the next yield automatically"
    ],
    correctAnswer: "C) The function pauses, returns the yielded value, and resumes later from the same point"
  },
  {
    question: "4. What is the syntax for a generator expression, and how does it differ from a list comprehension?",
    options: [
      "A) (expression for item in iterable if condition); uses () instead of []; returns a generator object",
      "B) [expression for item in iterable if condition]; uses [] instead of (); returns a list",
      "C) (expression while condition); returns a loop object",
      "D) {expression for item in iterable if condition}; returns a set"
    ],
    correctAnswer: "A) (expression for item in iterable if condition); uses () instead of []; returns a generator object"
  },
  {
    question: "5. What is a major advantage of using generators or generator expressions, especially for large sequences of data?",
    options: [
      "A) Faster than normal functions",
      "B) They allow concurrent execution",
      "C) Memory efficiency — they produce values lazily, one at a time",
      "D) They store all values in memory for quick access"
    ],
    correctAnswer: "C) Memory efficiency — they produce values lazily, one at a time"
  }
];

export default generatorsQuiz;
