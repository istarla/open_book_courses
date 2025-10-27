const modulesQuiz = [
  {
    question: "1. What is a Python module?",
    options: [
      "A) A built-in Python keyword",
      "B) A file containing Python definitions like functions, classes, and variables",
      "C) A section of Python code inside a function",
      "D) A folder containing multiple Python files"
    ],
    correctAnswer: "B) A file containing Python definitions like functions, classes, and variables"
  },
  {
    question: "2. If you import a module using `import my_module`, how do you call a function named `my_function` defined within that module?",
    options: [
      "A) my_function()",
      "B) my_module.my_function()",
      "C) import.my_function()",
      "D) module.my_function()"
    ],
    correctAnswer: "B) my_module.my_function()"
  },
  {
    question: "3. If you import a function using `from my_module import my_function`, how do you call that function?",
    options: [
      "A) my_module.my_function()",
      "B) from.my_function()",
      "C) my_function()",
      "D) module_function()"
    ],
    correctAnswer: "C) my_function()"
  },
  {
    question: "4. How can you import the random module and refer to it using the shorter name rd?",
    options: [
      "A) from random import rd",
      "B) import rd as random",
      "C) import random as rd",
      "D) from rd import random"
    ],
    correctAnswer: "C) import random as rd"
  },
  {
    question: "5. Why is using `from module_name import *` generally discouraged?",
    options: [
      "A) Because it runs slower than regular imports",
      "B) Because it pollutes the namespace and can cause naming conflicts",
      "C) Because it prevents importing functions",
      "D) Because it automatically deletes previous imports"
    ],
    correctAnswer: "B) Because it pollutes the namespace and can cause naming conflicts"
  }
];

export default modulesQuiz;
