const pythonTestingQuiz = [
  {
    question: "Why is writing automated tests important in software development?",
    options: [
      "To catch regressions, gain confidence in refactoring, provide documentation, improve design, and facilitate collaboration",
      "To make the code run faster",
      "To replace documentation entirely",
      "To eliminate the need for code reviews"
    ],
    answer: "To catch regressions, gain confidence in refactoring, provide documentation, improve design, and facilitate collaboration"
  },
  {
    question: "What is the name of Python's built-in testing framework module?",
    options: [
      "pytest",
      "nose",
      "unittest",
      "doctest"
    ],
    answer: "unittest"
  },
  {
    question: "In unittest, what must the names of test methods conventionally start with?",
    options: [
      "check_",
      "verify_",
      "test_",
      "run_"
    ],
    answer: "test_"
  },
  {
    question: "Which unittest.TestCase assertion method would you use to check if two values are equal?",
    options: [
      "assertEquals()",
      "assertEqual()",
      "assertSame()",
      "assertMatch()"
    ],
    answer: "assertEqual()"
  },
  {
    question: "How can you test if a specific function call raises a particular exception (e.g., ValueError) using unittest.TestCase?",
    options: [
      "self.assertThrows(ValueError, function_name, arg1, arg2)",
      "self.assertRaises(ValueError, function_name, arg1, arg2) or with self.assertRaises(ValueError): function_name(arg1, arg2)",
      "try-except blocks only",
      "assertEqual(ValueError, function_name(arg1, arg2))"
    ],
    answer: "self.assertRaises(ValueError, function_name, arg1, arg2) or with self.assertRaises(ValueError): function_name(arg1, arg2)"
  }
];

export default pythonTestingQuiz;
