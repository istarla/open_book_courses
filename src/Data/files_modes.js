const pythonFileModesQuiz = [
  {
    question:
      "What does the '+' modifier (e.g., 'r+', 'w+') add to a file mode?",
    options: [
      "It allows only reading from the file",
      "It allows only writing to the file",
      "It adds the ability to both read and write to the file (Update mode)",
      "It opens the file in binary mode",
    ],
    correctAnswer:
      "It adds the ability to both read and write to the file (Update mode)",
  },
  {
    question:
      "What does the 'b' modifier (e.g., 'rb', 'wb') signify in a file mode? When would you use it?",
    options: [
      "It opens the file in text mode for large files",
      "It signifies Binary mode, used for files like images or audio",
      "It stands for backup mode, used to save backups automatically",
      "It allows reading only when combined with '+'",
    ],
    correctAnswer:
      "It signifies Binary mode, used for files like images or audio",
  },
  {
    question:
      "What is the primary advantage of using the with open(...) as ...: statement compared to manually calling file.close()?",
    options: [
      "It makes the file open faster",
      "It allows using multiple files at once",
      "It guarantees the file is automatically closed even if errors occur",
      "It prevents syntax errors in the file path",
    ],
    correctAnswer:
      "It guarantees the file is automatically closed even if errors occur",
  },
  {
    question:
      "Rewrite the following code using a with statement: f = open('data.txt', 'r'); content = f.read(); print(content); f.close()",
    options: [
      "with open('data.txt') as f: content = f.read(); print(content)",
      "with open('data.txt', 'r') as f: content = f.read(); print(content)  # File auto-closes",
      "f = open('data.txt', 'r+') as f: content = f.read(); print(content)",
      "open('data.txt', 'r') with f: content = f.read(); print(content)",
    ],
    correctAnswer:
      "with open('data.txt', 'r') as f: content = f.read(); print(content)  # File auto-closes",
  },
  {
    question:
      "Is the variable assigned in the with open(...) as file_variable: statement accessible after the with block has finished?",
    options: [
      "No, it gets completely deleted after the block",
      "Yes, the variable exists but the file is closed and unusable for I/O",
      "Yes, the variable and file both stay active indefinitely",
      "Only in binary mode",
    ],
    correctAnswer:
      "Yes, the variable exists but the file is closed and unusable for I/O",
  },
];

export default pythonFileModesQuiz;
