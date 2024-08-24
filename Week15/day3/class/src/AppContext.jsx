import { useState, createContext } from "react";
import "./App.css";
import Display from "./components/display/Display";
import Action from "./components/actions/Action";
import Counter from "./Counter";

export const AppContext = createContext();

function App() {
  const [text, setText] = useState("text is going to be changed");
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>The createContext and the useContext Hook</h2>
      <AppContext.Provider value={{ text, setText, count, setCount }}>
        <Display />
        <Action />
        <Counter />
      </AppContext.Provider>
    </>
  );
}

export default App;

/**
         APP
        /    \
    Display    Action 
    /           \
ShowInput       Input  
 */
