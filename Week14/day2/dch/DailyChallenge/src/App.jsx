import { useState } from 'react'

import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ]);

  const vote = (index) => {
    // const newLanguages = [...languages];
    // newLanguages[index].votes ++;
    // setLanguages(newLanguages);

    const newLang = languages.map((language, i) => {
      return i === index ? {...language, votes: ++language.votes} : language;
    });

    setLanguages(newLang)
  };

  return (
    <>
      <h2>Vote Your Language!</h2>
      {languages.map((language,index) => {
        return (
          <div key={language.name}>
            {language.votes} {language.name}
            <button onClick={() => vote(index)}>Vote</button>
          </div>
        )
      })}
    </>
  );
}


export default App
