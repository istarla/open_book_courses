const pythonTryExceptQuiz = [
  {
    question: "What is the purpose of a try...except block in Python?",
    options: [
      "To define functions that handle multiple return values",
      "To attempt code that might raise an exception and handle it to prevent crashes",
      "To optimize code performance by skipping errors",
      "To stop execution immediately when an error occurs",
    ],
    correctAnswer:
      "To attempt code that might raise an exception and handle it to prevent crashes",
  },
  {
    question:
      "If code inside a try block runs without raising any exceptions, what happens to the except block(s)?",
    options: [
      "They are executed anyway",
      "They are skipped entirely",
      "They log the message 'No exceptions occurred'",
      "They raise an AssertionError",
    ],
    correctAnswer: "They are skipped entirely",
  },
  {
    question:
      "If an exception occurs inside the try block, what happens immediately?",
    options: [
      "Python stops executing the rest of the try block and looks for a matching except block",
      "Python restarts the try block from the beginning",
      "Python ignores the error and continues executing the block",
      "Python automatically terminates the program",
    ],
    correctAnswer:
      "Python stops executing the rest of the try block and looks for a matching except block",
  },
  {
    question:
      "Why is it generally better to specify a specific exception type (e.g., except ValueError:) rather than a generic except Exception:?",
    options: [
      "Because specific exceptions make the program run faster",
      "Because catching specific exceptions helps handle known errors and avoids hiding unexpected bugs",
      "Because except Exception: cannot be used in modern Python versions",
      "Because specific exceptions always prevent crashes",
    ],
    correctAnswer:
      "Because catching specific exceptions helps handle known errors and avoids hiding unexpected bugs",
  },
  {
    question:
      'Write a try...except block that attempts to open a file named "config.dat" for reading and prints its content, but prints "Configuration file not found." if a FileNotFoundError occurs.',
    options: [
      `try: with open("config.dat", "r") as f: content = f.read(); print(content) except IOError: print("Configuration file not found.")`,
      `try: with open("config.dat", "r") as f: content = f.read(); print("Configuration:"); print(content) except FileNotFoundError: print("Configuration file not found.")`,
      `try: open("config.dat"); except: print("Configuration file not found.")`,
      `try: open("config.dat", "r") print(content) except NameError: print("File missing.")`,
    ],
    correctAnswer:
      `try: with open("config.dat", "r") as f: content = f.read(); print("Configuration:"); print(content) except FileNotFoundError: print("Configuration file not found.")`,
  },
];

export default pythonTryExceptQuiz;
