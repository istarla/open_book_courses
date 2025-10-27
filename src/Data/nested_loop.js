const nestedLoopQuiz = [
  {
    question: "What is a nested loop?",
    options: [
      "A loop that runs only once",
      "A loop placed inside another loop",
      "A loop that runs after another loop finishes",
      "A loop that skips iterations",
    ],
    correctAnswer: "A loop placed inside another loop",
  },
  {
    question: "If an outer loop runs 4 times and an inner loop runs 5 times for each outer iteration, how many times will the code inside the inner loop's block execute in total?",
    options: [
      "4 times",
      "5 times",
      "9 times",
      "20 times",
    ],
    correctAnswer: "20 times",
  },
  {
    question: `Consider the code:
for (let i = 0; i < 2; i++) { // 0, 1
  for (let j = 0; j < 3; j++) { // 0, 1, 2
    console.log(\`(\${i},\${j})\`);
  }
}
What is the last line of output?`,
    options: [
      "(0,2)",
      "(1,0)",
      "(1,2)",
      "(2,1)",
    ],
    correctAnswer: "(1,2)",
  },
  {
    question: "What happens if you use a continue statement inside the inner loop of a nested loop structure?",
    options: [
      "It skips the current iteration of the inner loop and proceeds to the next inner iteration",
      "It skips the rest of the outer loop's iteration",
      "It breaks both loops",
      "It restarts the outer loop",
    ],
    correctAnswer: "It skips the current iteration of the inner loop and proceeds to the next inner iteration",
  },
  {
    question: "What happens if you use a break statement inside the inner loop of a nested loop structure?",
    options: [
      "It terminates both the inner and outer loops",
      "It terminates only the inner loop and continues with the next outer iteration",
      "It pauses both loops temporarily",
      "It restarts the outer loop from the beginning",
    ],
    correctAnswer: "It terminates only the inner loop and continues with the next outer iteration",
  },
];

export default nestedLoopQuiz;
