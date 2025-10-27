const listMethodsQuiz = [
  {
    question: "Which array method adds a single item to the end of the array?",
    options: [
      "add()",
      "insert()",
      "push()",
      "append()",
    ],
    correctAnswer: "push()",
  },
  {
    question: "If let myList = [10, 20, 30]; what does myList.splice(1, 0, 15) do? What is the array afterwards?",
    options: [
      "Inserts 15 at index 1; array becomes [10, 15, 20, 30]",
      "Removes item at index 1; array becomes [10, 30]",
      "Adds 15 at the end; array becomes [10, 20, 30, 15]",
      "Reverses the array",
    ],
    correctAnswer: "Inserts 15 at index 1; array becomes [10, 15, 20, 30]",
  },
  {
    question: "What is the difference between array methods splice() and pop()?",
    options: [
      "splice() removes a specific value; pop() removes the first value",
      "splice() can add or remove items at specific indices, while pop() removes the last item and returns it",
      "splice() reverses the array; pop() clears the array",
      "splice() removes duplicates; pop() removes by index",
    ],
    correctAnswer: "splice() can add or remove items at specific indices, while pop() removes the last item and returns it",
  },
  {
    question: "How can you sort an array numbers in descending order in-place?",
    options: [
      "numbers.sort()",
      "numbers.reverse()",
      "numbers.sort((a, b) => b - a)",
      "numbers.sort(reverse=True)",
    ],
    correctAnswer: "numbers.sort((a, b) => b - a)",
  },
  {
    question: "If const listA = [1, 2]; const listB = listA; then listB.push(3); what will listA contain? Why?",
    options: [
      "listA will contain [1, 2]; because listB is a copy",
      "listA will contain [1, 2, 3]; because listB references the same array in memory",
      "listA will contain [3]; because listB overwrites it",
      "listA will contain []; because push clears the array",
    ],
    correctAnswer: "listA will contain [1, 2, 3]; because listB references the same array in memory",
  },
];

export default listMethodsQuiz;
