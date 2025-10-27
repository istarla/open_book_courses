const pythonExceptionQuiz = [
  {
    question:
      "Can a single try block have multiple except blocks? If so, how does Python choose which one to execute?",
    options: [
      "No, only one except block is allowed per try block.",
      "Yes, Python executes all except blocks that match.",
      "Yes, Python checks the except blocks in order and executes the first one that matches.",
      "Yes, but only if they all handle the same exception type."
    ],
    correctAnswer:
      "Yes, Python checks the except blocks in order and executes the first one that matches."
  },
  {
    question:
      "How can you handle multiple different exception types with the same block of code?",
    options: [
      "By writing multiple except blocks for each exception type.",
      "By grouping the exception types in a tuple after the except keyword (e.g., except (TypeError, ValueError):).",
      "By nesting try blocks inside each other.",
      "By using a generic except Exception: block."
    ],
    correctAnswer:
      "By grouping the exception types in a tuple after the except keyword (e.g., except (TypeError, ValueError):)."
  },
  {
    question:
      "What is the purpose of the finally clause in a try...except...finally structure?",
    options: [
      "To handle multiple exceptions simultaneously.",
      "To specify code that runs only if no exception occurs.",
      "To define code that always runs after try and except blocks, regardless of whether an exception occurred.",
      "To catch exceptions that are not handled by any except block."
    ],
    correctAnswer:
      "To define code that always runs after try and except blocks, regardless of whether an exception occurred."
  },
  {
    question:
      "If an exception occurs in the try block and is caught by an except block, does the finally block still execute?",
    options: ["No", "Yes", "Only if the except block re-raises the exception", "Only if no exception occurs"],
    correctAnswer: "Yes"
  },
  {
    question:
      "If an exception occurs in the try block and there is no matching except block, does the finally block execute before the program terminates?",
    options: [
      "No, it is skipped when no except block matches.",
      "Yes, the finally block executes before the program terminates.",
      "Only if the exception is a RuntimeError.",
      "Only in interactive mode."
    ],
    correctAnswer:
      "Yes, the finally block executes before the program terminates."
  }
];

export default pythonExceptionQuiz;
