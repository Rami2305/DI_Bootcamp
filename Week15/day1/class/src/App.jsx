import './App.css'
import Counter from './component/Count'
import Home from './component/Home'
import ErrorBoundary from './ErrorBoundary'



function App() {

    return (
        <>
            <h2>Error Boundary</h2>
            <ErrorBoundary>
                <Counter/>
            </ErrorBoundary>
            <Counter/>
            <Home title="Hello"/>
        </>
    )
}

export default App
//Error boundary happens when render has problems