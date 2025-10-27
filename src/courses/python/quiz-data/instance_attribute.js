const quiz = [
  {
    question: "What is the special name of the method used to initialize the attributes of an object when it's created in JavaScript?",
    options: [
      "constructor",
      "__init__",
      "initialize",
      "create"
    ],
    correctAnswer: "constructor"
  },
  {
    question: "What is the first parameter used inside the constructor method, and what does it represent?",
    options: [
      "this — it represents the current instance of the class",
      "self — it represents the class itself",
      "obj — it represents the created object",
      "super — it represents the parent class"
    ],
    correctAnswer: "this — it represents the current instance of the class"
  },
  {
    question: "When is the constructor method called automatically in JavaScript?",
    options: [
      "When a new instance of the class is created using the 'new' keyword",
      "When the class is declared",
      "When any static method is called",
      "When the program starts"
    ],
    correctAnswer: "When a new instance of the class is created using the 'new' keyword"
  },
  {
    question: "Should the constructor method explicitly return a value in JavaScript?",
    options: [
      "No, constructors should not explicitly return a value",
      "Yes, it must return the object",
      "Yes, it must return true or false",
      "It depends on the context"
    ],
    correctAnswer: "No, constructors should not explicitly return a value"
  },
  {
    question: "Given the class definition below, how would you create an instance representing the point (10, 20)?\n\nclass Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}",
    options: [
      "const p = new Point(10, 20);",
      "const p = Point(10, 20);",
      "let p = Point.create(10, 20);",
      "var p = new Point.create(10, 20);"
    ],
    correctAnswer: "const p = new Point(10, 20);"
  }
];

export default quiz;
