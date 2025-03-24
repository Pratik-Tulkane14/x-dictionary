import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];
const handleSubmit=(e)=>{
  e.preventDefault();
  const result = data.filter((item)=>{
    if(item.word.toLowerCase() ===input.toLowerCase()){
      return item
    }
  });
  setOutput(result[0]?.meaning ||"Word not found in the dictionary.");
}
  return (
    <>
      <h1>Dictionary App</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3> <p>{output}</p>
    </>
  );
}

export default App
