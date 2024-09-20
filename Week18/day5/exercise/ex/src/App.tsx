import Greeting from "./component/greeting"
import Counter from "./component/counter"
import UseCard from "./component/usecard"
import Data from "./component/data"
function App() {
 

  return (
    <>
     <Greeting name='rami'/>
     <Counter />
     <UseCard name='Dana' age={32}/>
     <Data />
    </>
  )
}

export default App
