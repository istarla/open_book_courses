const dictionaryBasicsQuiz = [
  {
    question: "What are the two main components of an item in a dictionary (or JavaScript object)?",
    options: [
      "A key and a value",
      "An index and a value",
      "A name and a function",
      "A tag and an attribute",
    ],
    correctAnswer: "A key and a value",
  },
  {
    question: "What syntax is used to create an empty dictionary (object) in JavaScript?",
    options: [
      "const myDict = {};",
      "const myDict = [];",
      "const myDict = Object();",
      "Both const myDict = {}; and const myDict = Object();",
    ],
    correctAnswer: "Both const myDict = {}; and const myDict = Object();",
  },
  {
    question:
      'If const d = { a: 1, b: 2 }, how do you access the value associated with the key "b"? What happens if you try to access the value for key "c" using d["c"]?',
    options: [
      'Access with d["b"]; d["c"] returns undefined since "c" does not exist.',
      'Access with d.b; d["c"] throws an error.',
      'Access with d("b"); d["c"] returns null.',
      'Access with d.get("b"); d["c"] returns undefined.',
    ],
    correctAnswer:
      'Access with d["b"]; d["c"] returns undefined since "c" does not exist.',
  },
  {
    question:
      "What is a safer way to access a value when you are unsure if the key exists, and how does it work?",
    options: [
      "Use optional chaining: d?.key — returns undefined if key doesn't exist.",
      "Use d.get(key) — it always returns a value.",
      "Use d.fetch(key, defaultValue) — returns a default value.",
      "Use d.safeAccess(key) — built-in safe lookup function.",
    ],
    correctAnswer:
      "Use optional chaining: d?.key — returns undefined if key doesn't exist.",
  },
  {
    question:
      'How do you add a new key-value pair ("city": "New York") to an existing object called person?',
    options: [
      'person.city = "New York";',
      'person["city"] = "New York";',
      "Both A and B work",
      "person.add('city', 'New York');",
    ],
    correctAnswer: "Both A and B work",
  },
];

export default dictionaryBasicsQuiz;
