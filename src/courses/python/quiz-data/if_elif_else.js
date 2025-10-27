// Data/elif_statement.js

const elifStatementQuiz = [
  {
    question: "What does elif stand for and what is its purpose?",
    options: [
      "It stands for 'else loop' and repeats a block",
      "It stands for 'else if' and checks another condition if previous ones are False",
      "It stands for 'end if' and closes an if block",
      "It stands for 'error list if' and handles exceptions"
    ],
    correctAnswer: "It stands for 'else if' and checks another condition if previous ones are False"
  },
  {
    question: "In an if-elif-else chain, how many code blocks can be executed at most?",
    options: [
      "All blocks can execute if their conditions are True",
      "At most one block executes — the first one with a True condition or the else block",
      "Two blocks can execute if elif comes before else",
      "It depends on the indentation level"
    ],
    correctAnswer: "At most one block executes — the first one with a True condition or the else block"
  },
  {
    question: "Is the final else block mandatory in an if-elif-else chain?",
    options: [
      "Yes, it is required for syntax correctness",
      "No, it is optional — if omitted, none of the blocks execute when all conditions are False",
      "Yes, if you use multiple elif statements",
      "Only mandatory in loops"
    ],
    correctAnswer: "No, it is optional — if omitted, none of the blocks execute when all conditions are False"
  },
  {
    question: "Consider the code:\n\nweather = 'cloudy'\nif weather == 'sunny':\n    print('Wear sunglasses')\nelif weather == 'rainy':\n    print('Take umbrella')\nelif weather == 'cloudy':\n    print('Maybe jacket')\nelse:\n    print('Prepare for anything')\n\nWhat will be printed?",
    options: [
      "Wear sunglasses",
      "Take umbrella",
      "Maybe jacket",
      "Prepare for anything"
    ],
    correctAnswer: "Maybe jacket"
  },
  {
    question: "Rewrite the following using an if-elif-else structure:\n\nif x > 10:\n    print('Large')\nif x <= 10 and x > 5:\n    print('Medium')\nif x <= 5:\n    print('Small')",
    options: [
      "if x > 10: print('Large') elif x > 5: print('Medium') else: print('Small')",
      "if x > 10: print('Large') if x > 5: print('Medium') else: print('Small')",
      "if x >= 10: print('Large') elif x <= 5: print('Medium') else: print('Small')",
      "if x > 10: print('Medium') elif x > 5: print('Large') else: print('Small')"
    ],
    correctAnswer: "if x > 10: print('Large') elif x > 5: print('Medium') else: print('Small')"
  }
];

export default elifStatementQuiz;
