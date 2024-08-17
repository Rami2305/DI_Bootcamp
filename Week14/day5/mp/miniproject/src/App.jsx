import React, { useState } from 'react'
import quotes from './component/QuotesDatabase'
import Quote from './component/Quote'
import './component/style.css'



function getRandomQuote(quotes, currentQuote) {
  let randomQuote = currentQuote;
  

  while (randomQuote === currentQuote){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomIndex]};

  return randomQuote
}


function App() {
  const [currentQuote, setCurrentQuote ] = useState(getRandomQuote(quotes))
  // console.log(currentQuote);

  const nextQuote = () => {
    const newQ = getRandomQuote(quotes);
    setCurrentQuote(newQ)
  }

  return (
    <>
      <div className="container"> 
      <Quote quote={currentQuote.quote} author={currentQuote.author} />
        <button onClick={nextQuote}>Next Quote</button>
      </div>
    </>
  )
}

export default App
