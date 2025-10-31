const quizData = [
  {
    question: "1. How do you write a single-line comment in CSS?",
    options: [
      "/* This is a comment */",
      "// This is a comment",
      "# This is a comment",
      "<!-- This is a comment -->"
    ],
    correct: "/* This is a comment */"
  },
  {
    question: "2. Can CSS comments span multiple lines? If so, how?",
    options: [
      "No, CSS comments must be single-line only.",
      "Yes, using <!-- -->",
      "Yes, using // at the start of each line.",
      "Yes, by wrapping text between /* and */"
    ],
    correct: "Yes, by wrapping text between /* and */"
  },
  {
    question: "3. Which CSS property is used to change the text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "foreground-color"
    ],
    correct: "color"
  },
  {
    question: "4. Which CSS property is used to change the background color?",
    options: [
      "bgcolor",
      "background-color",
      "color-background",
      "background-style"
    ],
    correct: "background-color"
  },
  {
    question: "5. Which CSS rule makes all <h2> elements blue with a lightgray background?",
    options: [
      `h2 { color: blue; background-color: lightgray; }`,
      `h2 { text-color: blue; bg-color: lightgray; }`,
      `h2 { foreground: blue; background: gray; }`,
      `h2 { font-color: blue; background: lightgray; }`
    ],
    correct: `h2 { color: blue; background-color: lightgray; }`
  }
];
export default quizData;
