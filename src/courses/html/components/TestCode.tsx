import React, { useEffect } from "react";
import Prism from "prismjs";

// 👇 Import the language you need
import "prismjs/components/prism-python";

// Import a Prism theme
import "prismjs/themes/prism-tomorrow.css";

function TestCode() {
  const code = `
def greet(name):
    print(f"Hello, {name}!")

greet("World")
`;

  // Highlight code when component mounts
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="p-4 bg-gray-900 rounded-xl shadow-md">
      <pre className="rounded-lg">
        <code className="language-python">{code}</code>
      </pre>
    </div>
  );
}

export default TestCode;
