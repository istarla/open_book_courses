// File: intro_to_requests.js

const quiz = [
  {
    question: "What popular third-party library is commonly used for making HTTP requests in Python?",
    options: ["axios", "requests", "http.client", "fetch"],
    answer: "requests"
  },
  {
    question: "How do you install the 'requests' library?",
    options: ["npm install requests", "pip install requests", "brew install requests", "python install requests"],
    answer: "pip install requests"
  },
  {
    question: "Which 'requests' function is used to make a standard HTTP GET request?",
    options: ["requests.post()", "requests.get()", "requests.fetch()", "requests.connect()"],
    answer: "requests.get()"
  },
  {
    question: "After making a request like 'response = requests.get(url)', how can you check the HTTP status code returned by the server?",
    options: ["response.code", "response.status", "response.status_code", "response.http_code"],
    answer: "response.status_code"
  },
  {
    question: "If you expect the response body from a request to be in JSON format, which method of the 'response' object can you use to parse it directly into a Python dictionary or list?",
    options: ["response.toJSON()", "response.json()", "response.parseJSON()", "response.getJSON()"],
    answer: "response.json()"
  }
];

// ✅ Export as default so your MDX import works
export default quiz;

