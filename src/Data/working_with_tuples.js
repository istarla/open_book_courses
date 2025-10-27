const tuplePackingQuiz = [
  {
    question: "What is tuple packing in Python (or its equivalent concept in JS)?",
    options: [
      "Assigning multiple values to multiple variables individually",
      "The automatic creation of an array when comma-separated values are assigned to a single variable",
      "Using parentheses to declare an array",
      "Swapping two variables manually",
    ],
    correctAnswer: "The automatic creation of an array when comma-separated values are assigned to a single variable",
  },
  {
    question: "What is tuple unpacking in Python (or its equivalent in JS)?",
    options: [
      "Assigning the items of an array to multiple variables on the left side",
      "Creating a new array using spread syntax",
      "Removing items from an array",
      "Using push() to add elements to an array",
    ],
    correctAnswer: "Assigning the items of an array to multiple variables on the left side",
  },
  {
    question: "If const data = [10, 20, 30], what must be true for the destructuring assignment const [x, y, z] = data to work without error?",
    options: [
      "Number of variables must match number of items in the array",
      "Array must contain only numbers",
      "Array must have more items than variables",
      "Array must be frozen",
    ],
    correctAnswer: "Number of variables must match number of items in the array",
  },
  {
    question: "How can you swap the values of variables v1 and v2 in a single line using array destructuring?",
    options: [
      "[v1, v2] = [v2, v1];",
      "v1 = v2; v2 = v1;",
      "swap(v1, v2);",
      "const temp = v1; v1 = v2; v2 = temp;",
    ],
    correctAnswer: "[v1, v2] = [v2, v1];",
  },
  {
    question: "Given const pairs = [['a', 1], ['b', 2]], write a for loop that unpacks each pair and prints the letter and number separately.",
    options: [
      "for (const [letter, number] of pairs) { console.log(`Letter: ${letter}, Number: ${number}`); }",
      "for (let i = 0; i < pairs.length; i++) console.log(pairs[i]);",
      "pairs.forEach(pair => console.log(pair));",
      "for (const pair in pairs) { console.log(pair); }",
    ],
    correctAnswer: "for (const [letter, number] of pairs) { console.log(`Letter: ${letter}, Number: ${number}`); }",
  },
];

export default tuplePackingQuiz;
