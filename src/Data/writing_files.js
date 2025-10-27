const pythonFileWritingQuiz = [
  {
    question:
      "What file mode is used to open a file for writing, erasing any existing content?",
    options: ["'r'", "'w'", "'a'", "'x'"],
    correctAnswer: "'w'",
  },
  {
    question:
      "What file mode is used to open a file and add new data to its end without erasing existing content?",
    options: ["'r'", "'w'", "'a'", "'w+'"],
    correctAnswer: "'a'",
  },
  {
    question:
      "Which file object method writes a single string to the file? Does it add a newline automatically?",
    options: [
      "write(string) — No, it doesn’t add a newline automatically",
      "writeline(string) — Yes, it adds a newline automatically",
      "append(string) — Yes, it adds a newline automatically",
      "save(string) — No, it doesn’t add a newline automatically",
    ],
    correctAnswer:
      "write(string) — No, it doesn’t add a newline automatically",
  },
  {
    question:
      "Which file object method takes a list of strings and writes them to the file?",
    options: ["writeall()", "writelines()", "writeList()", "saveLines()"],
    correctAnswer: "writelines()",
  },
  {
    question:
      "If you want to write the integer variable value = 42 to a file opened as f, how must you modify it before passing it to f.write()?",
    options: [
      "f.write(value)",
      "f.write(int(value))",
      "f.write(str(value)) or f.write(f\"{value}\")",
      "f.write(float(value))",
    ],
    correctAnswer: "f.write(str(value)) or f.write(f\"{value}\")",
  },
];

export default pythonFileWritingQuiz;
