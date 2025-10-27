const pythonStringQuiz = [
  {
    question: "What is the difference between indexing and slicing in Python strings?",
    options: [
      "Indexing and slicing both extract multiple characters.",
      "Indexing accesses a single character at a specific position, while slicing extracts a substring using a range of indices.",
      "Slicing accesses one character, indexing extracts a substring.",
      "Both are used to modify string characters directly."
    ],
    correctAnswer:
      "Indexing accesses a single character at a specific position, while slicing extracts a substring using a range of indices."
  },
  {
    question: 'If my_str = "Python", what is the result of my_str[1:4]?',
    options: ['"Pyt"', '"yth"', '"tho"', '"ytho"'],
    correctAnswer: '"yth"'
  },
  {
    question: 'What does language[::2] return if language = "Python"?',
    options: ['"Pto"', '"yhn"', '"Pyon"', '"Pthn"'],
    correctAnswer: '"Pto"'
  },
  {
    question: "How can you get the length of a string stored in a variable text?",
    options: ["size(text)", "text.len()", "len(text)", "getLength(text)"],
    correctAnswer: "len(text)"
  },
  {
    question: 'If word = "Programming", what is word[-3:]?',
    options: ['"ing"', '"Pro"', '"ram"', '"min"'],
    correctAnswer: '"ing"'
  }
];

export default pythonStringQuiz;
