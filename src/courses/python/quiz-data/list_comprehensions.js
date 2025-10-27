const arrayComprehensionQuiz = [
  {
    question: "What is the primary benefit of using array methods like map() and filter()?",
    options: [
      "They make code longer and more complex",
      "They provide a concise and readable way to create new arrays from existing ones",
      "They modify the original array directly",
      "They only work with numbers",
    ],
    correctAnswer: "They provide a concise and readable way to create new arrays from existing ones",
  },
  {
    question: "What is the basic syntax for using map() to transform all elements of an array?",
    options: [
      "array.map(item => expression)",
      "[expression for item in array]",
      "array.expression(item)",
      "for (let item of array) { expression }",
    ],
    correctAnswer: "array.map(item => expression)",
  },
  {
    question: "How do you add a condition to only include specific items when creating a new array?",
    options: [
      "Use filter() before map(), like array.filter(condition).map(expression)",
      "Use if statements inside map()",
      "Use array.select(condition)",
      "You cannot filter inside a map() call",
    ],
    correctAnswer: "Use filter() before map(), like array.filter(condition).map(expression)",
  },
  {
    question: `Write a map() expression to create an array containing the lengths of the words in const words = ["hello", "world", "javascript"].`,
    options: [
      "words.map(word => word.length)",
      "words.filter(word => word.length)",
      "words.forEach(word => word.length)",
      "length(words)",
    ],
    correctAnswer: "words.map(word => word.length)",
  },
  {
    question: `Write an expression to create a new array from nums = [1, -2, 3, -4, 5] that only includes positive numbers.`,
    options: [
      "nums.map(num => num > 0)",
      "nums.filter(num => num > 0)",
      "nums.reduce(num => num > 0)",
      "nums.find(num => num > 0)",
    ],
    correctAnswer: "nums.filter(num => num > 0)",
  },
];

export default arrayComprehensionQuiz;
