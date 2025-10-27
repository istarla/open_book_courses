const returnStatementQuiz = [
  {
    question: "1. What is the purpose of the return statement in a function?",
    options: [
      "A) To stop a loop inside the function",
      "B) To exit the function and send a value back to the caller",
      "C) To pause the function temporarily",
      "D) To define a global variable inside the function"
    ],
    correctAnswer: "B) To exit the function and send a value back to the caller"
  },
  {
    question: "2. What value does a function return if it doesn't have an explicit return statement?",
    options: [
      "A) 0",
      "B) False",
      "C) None (or undefined in JavaScript)",
      "D) Empty string"
    ],
    correctAnswer: "C) None (or undefined in JavaScript)"
  },
  {
    question: "3. Can a Python function return multiple values? If so, how are they typically returned?",
    options: [
      "A) No, only one value can be returned",
      "B) Yes, as a list",
      "C) Yes, as a tuple (or array in JS)",
      "D) Yes, but only as a dictionary"
    ],
    correctAnswer: "C) Yes, as a tuple (or array in JS)"
  },
  {
    question: "4. What is the difference between a local variable and a global variable?",
    options: [
      "A) Local variables are global by default",
      "B) Local variables are defined inside functions and global ones outside",
      "C) Global variables are temporary and deleted after use",
      "D) Both behave the same"
    ],
    correctAnswer: "B) Local variables are defined inside functions and global ones outside"
  },
  {
    question: "5. Is it generally recommended to modify global variables directly from inside a function?",
    options: [
      "A) Yes, it simplifies code",
      "B) No, it can cause hard-to-find bugs and side effects",
      "C) Yes, if the program is short",
      "D) Only when using recursion"
    ],
    correctAnswer: "B) No, it can cause hard-to-find bugs and side effects"
  }
];

export default returnStatementQuiz;
