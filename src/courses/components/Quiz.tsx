
import { useState } from "react";

//Define Question type TypeScript interface
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function Quiz({ questions }: { questions: Question[] }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
 //Current question
  const q = questions[idx];
//Choosing an option
  function choose(opt: string) {
    if (selected !== null) return;
    setSelected(opt);
    if (opt === q.correctAnswer) setScore((s) => s + 1);
  }
//Next question
  function next() {
    const nextIndex = idx + 1;
    setSelected(null);
    if (nextIndex >= questions.length) {
      setFinished(true);
    } else {
      setIdx(nextIndex);
    }
  }
//Restart quiz
  function restart() {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }
//Styles object
  const styles = {
    card: { maxWidth: 760, margin: "18px auto", padding: 20, borderRadius: 12, background: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" },
    heading: { margin: 0, marginBottom: 8 },
    question: { fontSize: 18, marginBottom: 12, textAlign: "left" as const },
    option: { display: "block", width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 8, borderRadius: 8, border: "1px solid #e6e6e6", cursor: "pointer", background: "#fafafa" },
    selected: { background: "#e6f0ff", borderColor: "#9ec0ff" },
    correct: { background: "#e6ffef", borderColor: "#6fe08a" },
    wrong: { background: "#ffe6e6", borderColor: "#ff9e9e" },
    footer: { display: "flex", justifyContent: "space-between", marginTop: 16, alignItems: "center" },
    btn: { padding: "8px 14px", borderRadius: 8, cursor: "pointer", border: "none" },
  };
//Finished view
  if (finished) {
    return (
      <div style={styles.card}>
        <h2>🎉 Quiz Complete</h2>
        <p style={{ fontSize: 20 }}>Score: <strong>{score}</strong> / {questions.length}</p>
        <button onClick={restart} style={{ ...styles.btn, background: "#2f80ed", color: "#fff" }}>Try again</button>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      
      <h3 style={styles.heading}>🧠 Quiz Time — Question {idx + 1} of {questions.length}</h3>
      <p style={styles.question}>{q.question}</p>
     
      <div>
        {q.options.map((opt) => {
          let optStyle = { ...styles.option };
          if (selected === opt) optStyle = { ...optStyle, ...styles.selected };
          if (selected !== null) {
            if (opt === q.correctAnswer) optStyle = { ...optStyle, ...styles.correct };
            else if (opt === selected && selected !== q.correctAnswer) optStyle = { ...optStyle, ...styles.wrong };
          }

          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              style={optStyle}
              disabled={selected !== null}
            >
              {opt}
            </button>
          );
        })}
      </div>
      
      <div style={styles.footer}>
        <div>
          {selected === null ? (
            <small>Select an option to confirm.</small>
          ) : selected === q.correctAnswer ? (
            <small style={{ color: "#138000" }}>Correct ✅</small>
          ) : (
            <small style={{ color: "#c00" }}>Wrong ❌ — Correct: <strong>{q.correctAnswer}</strong></small>
          )}
        </div>

        <div>
          <button
            onClick={next}
            style={{
              ...styles.btn,
              background: selected === null ? "#ddd" : "#2f80ed",
              color: selected === null ? "#666" : "#fff"
            }}
            disabled={selected === null}
          >
            {idx + 1 < questions.length ? "Next" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
}
