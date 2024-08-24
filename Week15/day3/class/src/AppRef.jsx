import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const inputRef = useRef();
  const divRef = useRef();

  const nameRef = useRef("John");
  let name = "Marry";
  // console.log(nameRef);

  useEffect(() => {
    // console.log(inputRef);
    // console.log(divRef);
  }, []);

  const handleChange = () => {
    const value = inputRef.current.value;
    console.log(value);
    divRef.current.style.backgroundColor = "yellow";
  };

  const changeName = () => {
    nameRef.current = "Dan";
    name = "Anne";
    console.log(nameRef.current, name);
  };

  return (
    <div ref={divRef}>
      <h2>The useRef Hook</h2>
      <input
        ref={inputRef}
        name='username'
        id='username'
        onChange={handleChange}
      />
      <h2>
        My name is: {nameRef.current} {name}
      </h2>
      <input onChange={() => changeName()} />
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          + {count}
        </button>
      </div>
    </div>
  );
}

export default App;
