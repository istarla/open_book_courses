const virtualEnvQuiz = [
  {
    question: "1. What is the main benefit of using virtual environments in Python development?",
    options: [
      "A) They improve the performance of Python programs",
      "B) They allow each project to have its own dependencies and package versions without conflicts",
      "C) They automatically update all dependencies globally",
      "D) They are used only for deploying Python web applications"
    ],
    correctAnswer: "B) They allow each project to have its own dependencies and package versions without conflicts"
  },
  {
    question: "2. What is the standard command-line tool used to install Python packages from PyPI?",
    options: [
      "A) npm",
      "B) pip",
      "C) conda",
      "D) poetry"
    ],
    correctAnswer: "B) pip"
  },
  {
    question: "3. What command (using the built-in module) would you typically use to create a new virtual environment named '.venv' in your current directory?",
    options: [
      "A) python create venv .venv",
      "B) python --make-env .venv",
      "C) python -m venv .venv",
      "D) pip install .venv"
    ],
    correctAnswer: "C) python -m venv .venv"
  },
  {
    question: "4. After creating a virtual environment, what must you do before 'pip install' will install packages into that specific environment?",
    options: [
      "A) Run pip init",
      "B) Activate the virtual environment using the system-specific activation script",
      "C) Delete the global Python path",
      "D) Install packages globally first"
    ],
    correctAnswer: "B) Activate the virtual environment using the system-specific activation script"
  },
  {
    question: "5. What is the conventional name for the file used to list a project's dependencies, and what 'pip' command generates it based on the current environment?",
    options: [
      "A) dependencies.txt; pip show > dependencies.txt",
      "B) packages.txt; pip list > packages.txt",
      "C) requirements.txt; pip freeze > requirements.txt",
      "D) modules.txt; pip export > modules.txt"
    ],
    correctAnswer: "C) requirements.txt; pip freeze > requirements.txt"
  }
];

export default virtualEnvQuiz;
