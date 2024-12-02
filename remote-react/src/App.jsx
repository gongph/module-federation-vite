import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>from remote react</h1>
      <button
        style={{
          marginTop: "16px",
          outline: "none",
          border: "none",
          backgroundColor: "#646cff",
          borderRadius: "5px",
          padding: "3px 4px",
        }}
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}

export default App;
