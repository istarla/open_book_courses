const pythonRaiseQuiz = [
  {
    question: "What is the purpose of the raise statement in Python?",
    options: [
      "To catch exceptions that occur in the program.",
      "To explicitly signal that an error condition has occurred and trigger exception handling.",
      "To ignore specific errors and continue execution.",
      "To stop execution without showing any error."
    ],
    correctAnswer:
      "To explicitly signal that an error condition has occurred and trigger exception handling."
  },
  {
    question:
      "What information can you optionally include when raising an exception?",
    options: [
      "Only the line number where the error occurred.",
      "A descriptive error message as a string argument to the exception type (e.g., ValueError('Invalid age provided')).",
      "Only the name of the function that raised it.",
      "Nothing — raise does not take any arguments."
    ],
    correctAnswer:
      "A descriptive error message as a string argument to the exception type (e.g., ValueError('Invalid age provided'))."
  },
  {
    question:
      "If you raise an exception using raise MyException('Error'), and it is not caught by any except block, what happens?",
    options: [
      "The program continues to execute normally.",
      "Python automatically retries the operation.",
      "The program terminates and a traceback is printed showing the exception type and message.",
      "The exception is ignored silently."
    ],
    correctAnswer:
      "The program terminates and a traceback is printed showing the exception type and message."
  },
  {
    question:
      "Give an example scenario where explicitly raising a ValueError within your function might be appropriate.",
    options: [
      "When validating function input arguments, and a value is outside the acceptable range (e.g., negative number for a positive-only input).",
      "When the program needs to exit immediately without reason.",
      "When catching a syntax error in the source code.",
      "When the function completes successfully."
    ],
    correctAnswer:
      "When validating function input arguments, and a value is outside the acceptable range (e.g., negative number for a positive-only input)."
  },
  {
    question:
      "What does a bare raise statement (with no exception type after it) do when used inside an except block?",
    options: [
      "It raises a new SyntaxError.",
      "It re-raises the original exception caught by that except block.",
      "It suppresses all exceptions silently.",
      "It logs the exception without raising it."
    ],
    correctAnswer:
      "It re-raises the original exception caught by that except block."
  }
];

export default pythonRaiseQuiz;
