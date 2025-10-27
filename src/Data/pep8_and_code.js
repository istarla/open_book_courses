// File: intro_to_pep8.js

const quiz = [
  {
    question: "What is PEP 8?",
    options: [
      "A Python package manager",
      "The official style guide for Python code, providing conventions for formatting, naming, comments, etc.",
      "A Python debugging tool",
      "A Python web framework"
    ],
    answer: "The official style guide for Python code, providing conventions for formatting, naming, comments, etc."
  },
  {
    question: "According to PEP 8, how many spaces should be used for each indentation level?",
    options: ["2 spaces", "4 spaces", "8 spaces", "1 tab"],
    answer: "4 spaces"
  },
  {
    question: "What is the recommended maximum line length for Python code according to PEP 8?",
    options: ["72 characters", "79 characters", "100 characters", "120 characters"],
    answer: "79 characters"
  },
  {
    question: "What is the PEP 8 recommended naming convention for function and variable names? What about class names?",
    options: [
      "Functions/variables: CamelCase; Classes: snake_case",
      "Functions/variables: snake_case; Classes: CapWords/CamelCase",
      "Functions/variables: lowercase; Classes: uppercase only",
      "Functions/variables: PascalCase; Classes: snake_case"
    ],
    answer: "Functions/variables: snake_case; Classes: CapWords/CamelCase"
  },
  {
    question: "What is the purpose of a docstring (\"\"\"Docstring goes here\"\"\")? Where should it be placed?",
    options: [
      "To execute code; placed at the end of the file",
      "To document what a module, function, class, or method does; placed as the first statement inside the definition",
      "To add comments for debugging; placed anywhere",
      "To configure Python environment; placed at the top of the script"
    ],
    answer: "To document what a module, function, class, or method does; placed as the first statement inside the definition"
  }
];


export default quiz;
