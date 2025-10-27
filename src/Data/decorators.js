const decoratorsQuiz = [
  {
    question: "1. What is the main purpose of a decorator in JavaScript?",
    options: [
      "A) To permanently change the original function's code",
      "B) To enhance or modify functions or classes in a reusable way without changing their source code",
      "C) To define new data types in JavaScript",
      "D) To execute a function immediately after it's declared"
    ],
    correctAnswer: "B) To enhance or modify functions or classes in a reusable way without changing their source code"
  },
  {
    question: "2. What special syntax is used to apply a decorator named myDecorator to a class or method named myFunction?",
    options: [
      "A) myDecorator(myFunction)",
      "B) #myDecorator myFunction",
      "C) @myDecorator placed directly above the class or method definition",
      "D) decorate(myFunction, myDecorator)"
    ],
    correctAnswer: "C) @myDecorator placed directly above the class or method definition"
  },
  {
    question: "3. What does a typical decorator function usually return?",
    options: [
      "A) A completely unrelated function",
      "B) A modified or wrapped version of the original function or class",
      "C) The original function unchanged",
      "D) A Promise object"
    ],
    correctAnswer: "B) A modified or wrapped version of the original function or class"
  },
  {
    question: "4. Why are ...args and ...kwargs (rest parameters) commonly used inside a decorator’s inner function in JavaScript?",
    options: [
      "A) To restrict the decorator to specific arguments only",
      "B) To allow the wrapper function to accept and pass through any number of arguments to the original function",
      "C) To prevent the original function from receiving arguments",
      "D) To automatically log arguments"
    ],
    correctAnswer: "B) To allow the wrapper function to accept and pass through any number of arguments to the original function"
  },
  {
    question: "5. What is the purpose of using Reflect.metadata() or helper libraries like core-decorators in JavaScript decorators?",
    options: [
      "A) To copy metadata (like function name or description) from the original function to the decorator wrapper",
      "B) To remove metadata from functions",
      "C) To compile decorators at runtime automatically",
      "D) To log function execution details only"
    ],
    correctAnswer: "A) To copy metadata (like function name or description) from the original function to the decorator wrapper"
  }
];

export default decoratorsQuiz;
