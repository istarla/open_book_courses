const quiz = [
  {
    question: "What is Polymorphism in Object-Oriented Programming (OOP)?",
    options: [
      "The ability of objects of different classes to respond to the same method call in their own specific way",
      "The ability to hide class data from the user",
      "The process of inheriting properties from multiple classes",
      "The restriction of creating multiple instances of a class"
    ],
    correctAnswer: "The ability of objects of different classes to respond to the same method call in their own specific way"
  },
  {
    question: "What is Encapsulation in Object-Oriented Programming?",
    options: [
      "Bundling data (attributes) and methods within a class and restricting direct access to internal components",
      "Allowing methods to have multiple forms",
      "Inheriting methods from multiple parent classes",
      "Breaking data and logic into separate files"
    ],
    correctAnswer: "Bundling data (attributes) and methods within a class and restricting direct access to internal components"
  },
  {
    question: "In JavaScript, what does a single leading underscore (_) before a property or method name usually mean by convention?",
    options: [
      "It indicates the property/method is intended for internal use (a protected-like convention)",
      "It makes the property completely private",
      "It automatically prevents inheritance",
      "It means the property is static"
    ],
    correctAnswer: "It indicates the property/method is intended for internal use (a protected-like convention)"
  },
  {
    question: "What mechanism does JavaScript use for attributes or methods marked as private (with #)?",
    options: [
      "Private class fields (#) restrict access to within the class only at the language level",
      "They are just naming conventions without actual privacy",
      "They are stored in a hidden memory location",
      "They are automatically converted to static fields"
    ],
    correctAnswer: "Private class fields (#) restrict access to within the class only at the language level"
  },
  {
    question: "Can you still access a private field (marked with #) from outside the class in JavaScript?",
    options: [
      "No, private fields (#) cannot be accessed from outside the class — doing so causes a SyntaxError",
      "Yes, by using its mangled name",
      "Yes, using Object.keys()",
      "Yes, by calling super()"
    ],
    correctAnswer: "No, private fields (#) cannot be accessed from outside the class — doing so causes a SyntaxError"
  }
];

export default quiz;
