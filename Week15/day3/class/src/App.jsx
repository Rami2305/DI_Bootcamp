import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [yesno, setYesNo] = useState(true);
  const [text, setText] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, num, yesno, text);
  };
  return (
    <div>
      <h2>Forms in React</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name...'
          onChange={(e) => setName(e.target.value)}
        />{name}
        <br />
        <select onChange={(e) => setNum(e.target.value)}>
          <option value={1}>One</option>
          <option value={2}>two</option>
          <option value={3}>Three</option>
        </select>
        <br />
        Yes/No{" "}
        <input type='checkbox' onChange={(e) => setYesNo(e.target.checked)} />
        <br />
        <textarea onChange={(e) => setText(e.target.value)}></textarea>
        <br />
        <input type='submit' value={"Submit"} />
      </form>
    </div>
  );
}

export default App;
