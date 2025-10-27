const quiz = [
  {
    question: "What is the key difference between a class attribute and an instance attribute?",
    options: [
      "A class attribute is shared by all instances, while an instance attribute belongs to a specific instance",
      "An instance attribute is shared by all instances, while a class attribute is unique to each instance",
      "Both are shared by all instances",
      "Both belong to a specific instance"
    ],
    correctAnswer: "A class attribute is shared by all instances, while an instance attribute belongs to a specific instance"
  },
  {
    question: "How do you typically define a class attribute in JavaScript?",
    options: [
      "By assigning to a variable inside the class body, outside any method",
      "By assigning inside the constructor",
      "By using the 'this' keyword inside a method",
      "By using 'super()' inside a method"
    ],
    correctAnswer: "By assigning to a variable inside the class body, outside any method"
  },
  {
    question: "Which decorator or keyword is used to define a class method, and what is the conventional first parameter?",
    options: [
      "static method with 'cls' as first parameter",
      "static method with 'self' as first parameter",
      "class method with 'cls' as first parameter",
      "class method with 'this' as first parameter"
    ],
    correctAnswer: "class method with 'cls' as first parameter"
  },
  {
    question: "Which decorator or keyword is used to define a static method, and how are its parameters different?",
    options: [
      "static method, it does not receive 'this' automatically",
      "class method, it receives 'this' automatically",
      "instance method, it receives 'cls' automatically",
      "static method, it automatically receives 'cls'"
    ],
    correctAnswer: "static method, it does not receive 'this' automatically"
  },
  {
    question: "Can a class method directly access instance attributes (like 'this.name')? Why or why not?",
    options: [
      "No, because class methods do not have access to instance-specific attributes",
      "Yes, class methods can access all instance attributes",
      "Yes, but only if called with 'super()'",
      "No, because static methods can access instance attributes instead"
    ],
    correctAnswer: "No, because class methods do not have access to instance-specific attributes"
  }
];

export default quiz;
