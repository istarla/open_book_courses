const pythonDataTypesQuiz = [
  {
    question: "What are the four basic scalar data types covered today?",
    options: [
      "Integers, Lists, Tuples, Dictionaries",
      "Integers (int), Floating-Point Numbers (float), Booleans (bool), and Strings (str)",
      "Strings, Arrays, Objects, and Booleans",
      "Numbers, Arrays, Booleans, and Sets",
    ],
    correctAnswer:
      "Integers (int), Floating-Point Numbers (float), Booleans (bool), and Strings (str)",
  },
  {
    question:
      "What function can you use to find out the data type of a variable named my_var?",
    options: ["typeof(my_var)", "getType(my_var)", "dataType(my_var)", "type(my_var)"],
    correctAnswer: "type(my_var)",
  },
  {
    question: "What are the only two possible values for a Boolean variable?",
    options: [
      "Yes and No",
      "1 and 0",
      "True and False",
      "true and false",
    ],
    correctAnswer: "True and False",
  },
  {
    question:
      "If you perform the operation 15 / 4, what will be the data type of the result?",
    options: ["int", "str", "float", "bool"],
    correctAnswer: "float",
  },
  {
    question:
      'How would you convert the string "500" into an integer and store it in a variable called number?',
    options: [
      'number = int("500")',
      'number = str(500)',
      'int("500") = number',
      'convert("500", int)',
    ],
    correctAnswer: 'number = int("500")',
  },
];

export default pythonDataTypesQuiz;
