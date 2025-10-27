const pythonFileHandlingQuiz = [
  {
    question: "What built-in function is used to open a file in Python?",
    options: ["file()", "open()", "read()", "load()"],
    correctAnswer: "open()",
  },
  {
    question:
      "What is the default mode when opening a file with open() if no mode is specified?",
    options: ["'r' (read mode)", "'w' (write mode)", "'a' (append mode)", "'rb' (read binary mode)"],
    correctAnswer: "'r' (read mode)",
  },
  {
    question:
      "Why is it important to close a file after you are finished working with it?",
    options: [
      "To make the file read-only",
      "To free up system resources and ensure all data is written to disk",
      "To delete temporary files automatically",
      "To prevent Python from raising an exception",
    ],
    correctAnswer:
      "To free up system resources and ensure all data is written to disk",
  },
  {
    question:
      "Which file object method reads the entire content of a file into a single string?",
    options: ["readline()", "readlines()", "read()", "fetch()"],
    correctAnswer: "read()",
  },
  {
    question:
      "What is generally the most Pythonic and memory-efficient way to read a text file line by line?",
    options: [
      "Using file_object.readlines()",
      "Using file_object.read()",
      "By iterating directly over the file object using a for loop",
      "Using file_object.fetch()",
    ],
    correctAnswer:
      "By iterating directly over the file object using a for loop",
  },
];

export default pythonFileHandlingQuiz;
