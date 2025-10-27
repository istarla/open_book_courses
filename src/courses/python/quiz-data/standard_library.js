const pythonStandardLibraryQuiz = [
  {
    question: "1. Which standard library module would you primarily use to get the current working directory or list files in a directory?",
    options: [
      "A) sys",
      "B) os",
      "C) shutil",
      "D) pathlib"
    ],
    correctAnswer: "B) os"
  },
  {
    question: "2. What is the recommended way to join directory and file names to create a path that works on different operating systems?",
    options: [
      "A) os.path.link()",
      "B) os.path.join()",
      "C) sys.path()",
      "D) pathlib.concat()"
    ],
    correctAnswer: "B) os.path.join()"
  },
  {
    question: "3. Which standard library module provides access to command-line arguments passed to your script? What is the name of the list containing these arguments?",
    options: [
      "A) subprocess, args[]",
      "B) sys, sys.argv",
      "C) os, os.args",
      "D) argparse, params"
    ],
    correctAnswer: "B) sys, sys.argv"
  },
  {
    question: "4. What function from the 'sys' module can be used to terminate the execution of your Python script?",
    options: [
      "A) sys.close()",
      "B) sys.stop()",
      "C) sys.exit()",
      "D) sys.quit()"
    ],
    correctAnswer: "C) sys.exit()"
  },
  {
    question: "5. Which standard library module provides functions like sin(), cos(), sqrt(), and constants like pi?",
    options: [
      "A) random",
      "B) decimal",
      "C) math",
      "D) statistics"
    ],
    correctAnswer: "C) math"
  }
];

export default pythonStandardLibraryQuiz;
