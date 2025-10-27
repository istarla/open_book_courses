// File: intro_to_numpy.js

const quiz = [
  {
    question: "What is the primary purpose of the NumPy library?",
    options: [
      "To create web applications",
      "To provide support for efficient operations on large, multi-dimensional arrays and matrices",
      "To handle HTTP requests",
      "To perform machine learning automatically"
    ],
    answer: "To provide support for efficient operations on large, multi-dimensional arrays and matrices"
  },
  {
    question: "What is the core data structure in NumPy?",
    options: ["DataFrame", "Series", "ndarray", "Matrix"],
    answer: "ndarray"
  },
  {
    question: "What are the two primary data structures provided by the Pandas library?",
    options: ["List and Dictionary", "Array and Matrix", "Series and DataFrame", "ndarray and Series"],
    answer: "Series and DataFrame"
  },
  {
    question: "What Pandas function is commonly used to read data from a Comma Separated Values (CSV) file into a DataFrame?",
    options: ["pd.read_csv()", "pd.read_excel()", "pd.load_csv()", "pd.load_data()"],
    answer: "pd.read_csv()"
  },
  {
    question: "If df is a Pandas DataFrame, how can you select only the column named 'Age'?",
    options: ["df.get('Age')", "df['Age']", "df.column('Age')", "df.Age()"],
    answer: "df['Age']"
  }
];

// ✅ Export as default so MDX import works
export default quiz;

