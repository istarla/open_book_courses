const quiz = [
  {
    question: "What does inheritance allow a class to do in JavaScript?",
    options: [
      "Inherit attributes and methods from another class",
      "Store data permanently",
      "Restrict access to methods of another class",
      "Automatically execute async functions"
    ],
    correctAnswer: "Inherit attributes and methods from another class"
  },
  {
    question: "In the example 'class Dog extends Animal {}', what is the term for 'Dog' and what is the term for 'Animal'?",
    options: [
      "Dog → subclass (child class), Animal → superclass (parent class)",
      "Dog → superclass (parent class), Animal → subclass (child class)",
      "Dog → instance, Animal → method",
      "Dog → object, Animal → constructor"
    ],
    correctAnswer: "Dog → subclass (child class), Animal → superclass (parent class)"
  },
  {
    question: "What does it mean to 'override' a method in a child class?",
    options: [
      "To redefine a method in the child class that already exists in the parent class",
      "To remove a method from the parent class",
      "To prevent the parent method from being called",
      "To call all methods from the parent automatically"
    ],
    correctAnswer: "To redefine a method in the child class that already exists in the parent class"
  },
  {
    question: "What is the purpose of the 'super()' function in JavaScript, especially inside a subclass constructor?",
    options: [
      "To call the constructor or methods of the parent class",
      "To import external functions",
      "To initialize global variables",
      "To return the current instance"
    ],
    correctAnswer: "To call the constructor or methods of the parent class"
  },
  {
    question: "If class C extends B and B extends A, what is the typical method lookup order when calling a method on an instance of C?",
    options: [
      "C → B → A → Object",
      "A → B → C → Object",
      "B → C → A → Object",
      "Object → A → B → C"
    ],
    correctAnswer: "C → B → A → Object"
  }
];

export default quiz;
