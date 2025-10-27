const arraySlicingQuiz = [
  {
    question: "If const myArray = [0, 1, 2, 3, 4, 5]; what does myArray.slice(1, 4) produce?",
    options: [
      "[0, 1, 2]",
      "[1, 2, 3]",
      "[1, 2, 3, 4]",
      "[2, 3, 4]",
    ],
    correctAnswer: "[1, 2, 3]",
  },
  {
    question: "How can you create a shallow copy of an array named originalArray using slicing?",
    options: [
      "const copiedArray = originalArray;",
      "const copiedArray = [...originalArray];",
      "const copiedArray = originalArray.slice();",
      "const copiedArray = copy(originalArray);",
    ],
    correctAnswer: "const copiedArray = originalArray.slice();",
  },
  {
    question: "What is the result of myArray.filter((_, i) => i % 2 === 0) for myArray = [10, 20, 30, 40, 50]?",
    options: [
      "[10, 30, 50]",
      "[20, 40]",
      "[30, 50]",
      "[10, 20, 30]",
    ],
    correctAnswer: "[10, 30, 50]",
  },
  {
    question: "If let letters = ['a', 'b', 'c', 'd']; what does letters.splice(1, 1) do? What is the array afterwards?",
    options: [
      "Removes 'b'; array becomes ['a', 'c', 'd']",
      "Removes 'a'; array becomes ['b', 'c', 'd']",
      "Removes 'c'; array becomes ['a', 'b', 'd']",
      "Removes 'd'; array becomes ['a', 'b', 'c']",
    ],
    correctAnswer: "Removes 'b'; array becomes ['a', 'c', 'd']",
  },
  {
    question: "How would you replace the last two elements of myArray = [1, 2, 3, 4, 5] with a single element 99 using slice-like assignment?",
    options: [
      "myArray.splice(-2, 2, 99); // becomes [1, 2, 3, 99]",
      "myArray[-2:] = [99];",
      "myArray.replace(-2, 99);",
      "myArray.pop(); myArray.push(99);",
    ],
    correctAnswer: "myArray.splice(-2, 2, 99); // becomes [1, 2, 3, 99]",
  },
];

export default arraySlicingQuiz;
