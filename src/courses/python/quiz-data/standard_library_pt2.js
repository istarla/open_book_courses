const datetimeAndJsonQuiz = [
  {
    question: "1. Which class from the 'datetime' module would you use to represent just a date (year, month, day)?",
    options: [
      "A) datetime.datetime",
      "B) datetime.time",
      "C) datetime.date",
      "D) datetime.timestamp"
    ],
    correctAnswer: "C) datetime.date"
  },
  {
    question: "2. What is the purpose of the 'strftime()' method on date/time objects, and what does 'strptime()' do?",
    options: [
      "A) strftime() formats a string into a date; strptime() converts a date to string",
      "B) strftime() formats a date/time object into a string; strptime() parses a string into a datetime object",
      "C) strftime() and strptime() both return current time",
      "D) strftime() parses JSON; strptime() formats JSON"
    ],
    correctAnswer: "B) strftime() formats a date/time object into a string; strptime() parses a string into a datetime object"
  },
  {
    question: "3. What does the 'json.dumps()' function do?",
    options: [
      "A) Parses a JSON string into a Python object",
      "B) Serializes a Python object into a JSON formatted string",
      "C) Deletes JSON keys from a file",
      "D) Dumps data from one file to another"
    ],
    correctAnswer: "B) Serializes a Python object into a JSON formatted string"
  },
  {
    question: "4. What does the 'json.load()' function do (note: load, not loads)?",
    options: [
      "A) Loads JSON data from a URL",
      "B) Reads JSON data from a file-like object and parses it into a Python object",
      "C) Writes JSON data to a file",
      "D) Converts Python objects into JSON strings"
    ],
    correctAnswer: "B) Reads JSON data from a file-like object and parses it into a Python object"
  },
  {
    question: "5. What Python data type does a JSON object ({...}) typically map to when loaded using the json module, and what about a JSON array ([...])?",
    options: [
      "A) JSON object → list, JSON array → dict",
      "B) JSON object → tuple, JSON array → set",
      "C) JSON object → dict, JSON array → list",
      "D) JSON object → string, JSON array → int"
    ],
    correctAnswer: "C) JSON object → dict, JSON array → list"
  }
];

export default datetimeAndJsonQuiz;
