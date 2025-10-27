// Data/nested_if.js

const nestedIfQuiz = [
  {
    question: "What is a nested conditional statement?",
    options: [
      "An if statement that repeats automatically",
      "An if, if-else, or if-elif-else statement inside another conditional block",
      "A loop that contains an if condition",
      "A condition written outside any function"
    ],
    correctAnswer: "An if, if-else, or if-elif-else statement inside another conditional block"
  },
  {
    question: "How does Python determine the structure of nested conditionals?",
    options: [
      "By counting parentheses",
      "Through indentation, where inner blocks are indented further",
      "By using semicolons to separate blocks",
      "Through the use of end-if statements"
    ],
    correctAnswer: "Through indentation, where inner blocks are indented further"
  },
  {
    question: "When is the condition of an inner if statement evaluated?",
    options: [
      "Always, before the outer condition",
      "Only if the condition of the outer if or elif evaluates to True",
      "Only when both outer and inner conditions are False",
      "After all outer conditions, regardless of their result"
    ],
    correctAnswer: "Only if the condition of the outer if or elif evaluates to True"
  },
  {
    question: "Consider this code:\n\nx = 10\ny = 20\nif x > 5:\n    print('A')\n    if y > 15:\n        print('B')\n    else:\n        print('C')\nelse:\n    print('D')\nprint('E')\n\nWhat is the output?",
    options: [
      "A C E",
      "A B E",
      "D E",
      "A B C D E"
    ],
    correctAnswer: "A B E"
  },
  {
    question: "What is a potential drawback of using deeply nested conditionals (e.g., 4 or more levels deep)?",
    options: [
      "It makes code easier to read",
      "It automatically optimizes performance",
      "It can reduce readability and make debugging harder",
      "It increases execution speed"
    ],
    correctAnswer: "It can reduce readability and make debugging harder"
  }
];

export default nestedIfQuiz;
