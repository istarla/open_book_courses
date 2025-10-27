const pythonExceptionsQuiz = [
  {
    question:
      "What is the difference between a Syntax Error and an Exception (Runtime Error)?",
    options: [
      "Syntax errors occur during execution; exceptions occur during compilation",
      "Syntax errors happen when code violates Python's grammar before execution, while exceptions occur during runtime when valid code faces an issue",
      "Both are the same type of error in Python",
      "Exceptions are detected before execution; syntax errors happen at runtime",
    ],
    correctAnswer:
      "Syntax errors happen when code violates Python's grammar before execution, while exceptions occur during runtime when valid code faces an issue",
  },
  {
    question:
      "What happens by default if an exception occurs in your Python script and is not handled?",
    options: [
      "The program automatically retries the operation",
      "The program terminates and prints a traceback to the console",
      "Python ignores it and continues execution",
      "It logs the error silently without displaying anything",
    ],
    correctAnswer:
      "The program terminates and prints a traceback to the console",
  },
  {
    question:
      "What built-in exception type would likely be raised if you try to use a variable that hasn't been assigned a value yet?",
    options: ["TypeError", "NameError", "KeyError", "ValueError"],
    correctAnswer: "NameError",
  },
  {
    question:
      'What built-in exception type would likely be raised if you try to access my_dict["missing_key"] and "missing_key" is not in my_dict?',
    options: ["KeyError", "IndexError", "ValueError", "LookupError"],
    correctAnswer: "KeyError",
  },
  {
    question:
      "When reading a traceback, where should you typically look first to find the specific error type and message?",
    options: [
      "At the top of the traceback",
      "In the middle of the traceback",
      "At the bottom (last line) of the traceback",
      "Anywhere, traceback order doesn't matter",
    ],
    correctAnswer: "At the bottom (last line) of the traceback",
  },
];

export default pythonExceptionsQuiz;
