const withStatementQuiz = [
  {
    question: "1. What is the main purpose of the 'with' statement or similar resource management pattern in JavaScript?",
    options: [
      "A) To simplify resource management by ensuring setup and cleanup actions are handled automatically, even if errors occur",
      "B) To execute code blocks multiple times automatically",
      "C) To declare variables globally inside functions",
      "D) To handle asynchronous code execution"
    ],
    correctAnswer: "A) To simplify resource management by ensuring setup and cleanup actions are handled automatically, even if errors occur"
  },
  {
    question: "2. In Python, an object used with the 'with' statement is called a context manager. What two special methods must it implement?",
    options: [
      "A) __open__() and __close__()",
      "B) __enter__() and __exit__()",
      "C) start() and stop()",
      "D) begin() and end()"
    ],
    correctAnswer: "B) __enter__() and __exit__()"
  },
  {
    question: "3. When is the __enter__() method of a context manager called, and what is its return value used for?",
    options: [
      "A) Called when leaving the 'with' block; used for cleanup",
      "B) Called before entering the 'with' block; its return value is assigned to the variable after 'as' (if present)",
      "C) Called after all statements execute; used for returning data",
      "D) Called during exception handling; used for error messages"
    ],
    correctAnswer: "B) Called before entering the 'with' block; its return value is assigned to the variable after 'as' (if present)"
  },
  {
    question: "4. When is the __exit__() method called, and is it called if an exception occurs inside the 'with' block?",
    options: [
      "A) Only when no errors occur inside the block",
      "B) Called at the end of the program only",
      "C) Called when exiting the 'with' block, always — even if an exception occurs",
      "D) Never called automatically"
    ],
    correctAnswer: "C) Called when exiting the 'with' block, always — even if an exception occurs"
  },
  {
    question: "5. Besides creating a class, what decorator from the 'contextlib' module allows you to create a context manager using a generator function with 'yield'?",
    options: [
      "A) @contextlib.manager",
      "B) @contextlib.handler",
      "C) @contextlib.contextmanager",
      "D) @contextlib.wrapper"
    ],
    correctAnswer: "C) @contextlib.contextmanager"
  }
];

export default withStatementQuiz;
