// Data/if_else.js

const ifElseQuiz = [
  {
    question: "What is the purpose of the else clause in an if-else statement?",
    options: [
      "To repeat the if condition",
      "To provide an alternative block when the if condition is False",
      "To exit the program",
      "To check another condition"
    ],
    correctAnswer: "To provide an alternative block when the if condition is False"
  },
  {
    question: "Can both the if block and the else block execute for the same evaluation of an if-else statement?",
    options: [
      "Yes, if the condition is True",
      "Yes, if the condition is False",
      "No, only one block executes depending on the condition",
      "It depends on indentation"
    ],
    correctAnswer: "No, only one block executes depending on the condition"
  },
  {
    question: "Does the else keyword require its own condition?",
    options: [
      "Yes, it must have a condition",
      "No, it executes only when the if condition is False",
      "It depends on the compiler",
      "It can have multiple conditions"
    ],
    correctAnswer: "No, it executes only when the if condition is False"
  },
  {
    question: "Consider the code:\n\nx = 10\nif x < 5:\n    print('A')\nelse:\n    print('B')\nprint('C')\n\nWhat will be printed to the console?",
    options: [
      "A C",
      "B C",
      "Only B",
      "Error"
    ],
    correctAnswer: "B C"
  },
  {
    question: "Write a simple if-else statement that checks if a variable is_active (which holds a boolean) is True. If it is, print 'Status: Active'; otherwise, print 'Status: Inactive'.",
    options: [
      "if is_active: print('Status: Active') else: print('Status: Inactive')",
      "if is_active = True: print('Active')",
      "print('Active') if is_active == True",
      "if is_active then print('Active')"
    ],
    correctAnswer: "if is_active: print('Status: Active') else: print('Status: Inactive')"
  }
];

export default ifElseQuiz;
