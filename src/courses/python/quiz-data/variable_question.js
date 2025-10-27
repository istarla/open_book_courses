const pythonVariablesQuiz = [
  {
    question: "What is the primary purpose of using variables in programming?",
    options: [
      "To perform mathematical operations",
      "To store data values using a name, making code more readable, reusable, and manageable",
      "To make programs run faster",
      "To format text output",
    ],
    correctAnswer:
      "To store data values using a name, making code more readable, reusable, and manageable",
  },
  {
    question:
      "Which of the following variable names are invalid in Python: _count, 1st_place, user-email, if, lastName?",
    options: [
      "_count and lastName",
      "1st_place, user-email, and if",
      "All are invalid",
      "Only if is invalid",
    ],
    correctAnswer: "1st_place, user-email, and if",
  },
  {
    question:
      "What is the recommended naming convention for multi-word variable names in Python (according to PEP 8)?",
    options: [
      "camelCase (e.g., userLoginCount)",
      "PascalCase (e.g., UserLoginCount)",
      "snake_case (e.g., user_login_count)",
      "kebab-case (e.g., user-login-count)",
    ],
    correctAnswer: "snake_case (e.g., user_login_count)",
  },
  {
    question: "What does it mean that Python is 'dynamically typed'?",
    options: [
      "You must declare variable types before using them",
      "You don't need to declare variable types; Python infers them at runtime",
      "Variables can only store one type of data",
      "Python converts all types to strings automatically",
    ],
    correctAnswer:
      "You don't need to declare variable types; Python infers them at runtime",
  },
  {
    question:
      "Which of the following correctly creates a variable named book_title and assigns it a string value?",
    options: [
      "var book_title = 'The Hitchhiker's Guide'",
      "book_title: 'The Hitchhiker's Guide'",
      "book_title = 'The Hitchhiker's Guide'",
      "set book_title = 'The Hitchhiker's Guide'",
    ],
    correctAnswer: "book_title = 'The Hitchhiker's Guide'",
  },
];

export default pythonVariablesQuiz;
