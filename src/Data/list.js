const listBasicsQuiz = [
  {
    question: "How do you create an empty list in JavaScript?",
    options: [
      "let myList = {};",
      "let myList = ();",
      "let myList = [];",
      "let myList = list();",
    ],
    correctAnswer: "let myList = [];",
  },
  {
    question: "Are arrays mutable or immutable in JavaScript? What does that mean?",
    options: [
      "Immutable, meaning their contents cannot be changed after creation",
      "Mutable, meaning their contents can be changed after creation",
      "Immutable, meaning they cannot be reassigned",
      "Mutable, meaning they cannot be accessed after creation",
    ],
    correctAnswer: "Mutable, meaning their contents can be changed after creation",
  },
  {
    question: "If const myList = [10, 20, 30, 40], what is the index of the item 30?",
    options: [
      "1",
      "2",
      "3",
      "0",
    ],
    correctAnswer: "2",
  },
  {
    question: "What function (or property) do you use to find the number of items in an array called data?",
    options: [
      "count(data)",
      "size(data)",
      "data.length",
      "len(data)",
    ],
    correctAnswer: "data.length",
  },
  {
    question: "Write a line of code to change the first item in the array colors = ['red', 'green', 'blue'] to 'orange'.",
    options: [
      "colors[1] = 'orange';",
      "colors[0] = 'orange';",
      "colors.first = 'orange';",
      "colors.change(0, 'orange');",
    ],
    correctAnswer: "colors[0] = 'orange';",
  },
];

export default listBasicsQuiz;
