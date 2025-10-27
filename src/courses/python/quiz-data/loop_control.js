const loopControlQuiz = [
  {
    question: "What is the purpose of the break statement inside a loop?",
    options: [
      "To skip the current iteration and continue with the next one",
      "To immediately terminate the innermost loop it resides in",
      "To restart the loop from the beginning",
      "To pause the loop temporarily",
    ],
    correctAnswer: "To immediately terminate the innermost loop it resides in",
  },
  {
    question: "What is the purpose of the continue statement inside a loop?",
    options: [
      "To exit the loop entirely",
      "To repeat the current iteration",
      "To skip the remaining statements in the current iteration and go to the next",
      "To stop the loop if a condition is met",
    ],
    correctAnswer: "To skip the remaining statements in the current iteration and go to the next",
  },
  {
    question: "If a break statement is executed inside a nested loop, which loop does it exit?",
    options: [
      "The outermost loop",
      "The innermost loop containing the break statement",
      "Both loops simultaneously",
      "Neither loop—it only skips the next iteration",
    ],
    correctAnswer: "The innermost loop containing the break statement",
  },
  {
    question: `Consider the code:
for (let i = 0; i < 5; i++) { // 0, 1, 2, 3, 4
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}
What numbers will be printed?`,
    options: [
      "0, 1, 2, 3, 4",
      "0, 1, 3",
      "1, 2, 3",
      "0, 2, 3, 4",
    ],
    correctAnswer: "0, 1, 3",
  },
  {
    question: "When might you prefer using continue over an if statement inside a loop?",
    options: [
      "When you want to completely exit the loop early",
      "When the skip condition occurs early and you want to avoid executing the rest of the loop's code for that iteration",
      "When you want to pause the loop temporarily",
      "When there are no conditions in the loop",
    ],
    correctAnswer: "When the skip condition occurs early and you want to avoid executing the rest of the loop's code for that iteration",
  },
];

export default loopControlQuiz;
