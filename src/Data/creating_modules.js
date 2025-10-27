const pythonModuleQuiz = [
  {
    question: "How do you create a simple Python module?",
    options: [
      "Create a Python file (.py) containing definitions",
      "Write a function called module()",
      "Use the import keyword only",
      "Create a folder named module",
    ],
    correctAnswer: "Create a Python file (.py) containing definitions",
  },
  {
    question: "If you create a module file named helpers.py, how would you import it entirely into another script named main.py?",
    options: [
      "import helpers",
      "from helpers import *",
      "include helpers.py",
      "require helpers",
    ],
    correctAnswer: "import helpers",
  },
  {
    question: "After importing helpers as in the previous question, how would you call a function do_something() defined inside helpers.py?",
    options: [
      "helpers.do_something()",
      "do_something()",
      "helpers->do_something()",
      "call(helpers.do_something())",
    ],
    correctAnswer: "helpers.do_something()",
  },
  {
    question: "What is the value of the special variable __name__ when a Python file is run directly as the main script?",
    options: ["__main__", "__file__", "__module__", "None"],
    correctAnswer: "__main__",
  },
  {
    question: "What is the purpose of the if __name__ == '__main__': block in a Python module?",
    options: [
      "To contain code that runs only when the module is imported",
      "To contain code that runs only when the module is executed directly",
      "To define global variables",
      "To automatically run all functions in the module",
    ],
    correctAnswer: "To contain code that runs only when the module is executed directly",
  },
];

export default pythonModuleQuiz;

