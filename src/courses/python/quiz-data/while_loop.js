// src/Data/while_loop.js

const whileLoopQuiz = [
  {
    question:
      "What is the primary difference between a for loop and a while loop in terms of when they are typically used?",
    options: [
      "for loops are used for unknown iterations, while while loops are for fixed sequences",
      "for loops iterate over a known sequence or fixed number of times; while loops repeat as long as a condition is True",
      "There is no difference; they can be used interchangeably",
      "while loops are faster than for loops"
    ],
    correctAnswer:
      "for loops iterate over a known sequence or fixed number of times; while loops repeat as long as a condition is True"
  },
  {
    question: "When is the condition of a while loop checked?",
    options: [
      "After the loop executes once",
      "Before each potential execution of the loop’s code block",
      "Only once at the start of the program",
      "At the end of the program"
    ],
    correctAnswer: "Before each potential execution of the loop’s code block"
  },
  {
    question:
      "What is an infinite loop, and why is it important to avoid in while loops?",
    options: [
      "A loop that never starts; it's not important to avoid",
      "A loop that never ends because its condition never becomes false; it can hang or crash the program",
      "A loop that runs exactly once; it slows the program",
      "A loop with an unknown number of iterations; it improves performance"
    ],
    correctAnswer:
      "A loop that never ends because its condition never becomes false; it can hang or crash the program"
  },
  {
    question: "Consider the code:\n\nx = 10\nwhile x > 5:\n    print(x)\n    x -= 2\n\nWhat numbers will be printed?",
    options: ["10, 8, 6", "10, 9, 8, 7, 6", "10, 8, 6, 4", "10, 5, 0"],
    correctAnswer: "10, 8, 6"
  },
  {
    question:
      "Write a while loop that prints 'Still waiting...' as long as a boolean variable is_ready is False. Include a way to eventually stop the loop for testing.",
    options: [
      `is_ready = False
max_waits = 3
wait_count = 0
while not is_ready and wait_count < max_waits:
    print("Still waiting...")
    wait_count += 1
    if wait_count >= 2:
        is_ready = True
if is_ready:
    print("Ready!")
else:
    print("Max waits reached.")`,
      `while is_ready:
    print("Still waiting...")`,
      `for i in range(3):
    print("Still waiting...")`,
      `is_ready = True
while is_ready:
    print("Ready!")`
    ],
    correctAnswer: `is_ready = False
max_waits = 3
wait_count = 0
while not is_ready and wait_count < max_waits:
    print("Still waiting...")
    wait_count += 1
    if wait_count >= 2:
        is_ready = True
if is_ready:
    print("Ready!")
else:
    print("Max waits reached.")`
  }
];

export default whileLoopQuiz;
