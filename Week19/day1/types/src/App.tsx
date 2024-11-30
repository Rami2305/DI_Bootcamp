import { useState } from 'react'
import Heading from './components/Heading'
import Section from './components/Section'
import List from './components/List'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
     <Heading title='React + TS' subTitle='typescript is powerfull tool'/>
     <Section content='bla bla bla'>
        <h2>hello TS</h2>
      </Section>
      <List items={['a', 's', 'd', 3]}/>
      <Counter  count ={count} setCount={setCount}/>
        {/* <h2>{count}</h2> */}
      {/* </Counter> */}
    </>
  )
}

export default App
