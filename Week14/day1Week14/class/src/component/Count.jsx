import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)
    

    const add = () => {
        setCount(count + 1)
    }

    const minus = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h2>Count</h2>
            <button onClick={()=> add()}> + </button>
            {count}
            <button onClick={()=> minus()}> - </button>
        </>
    )
}

export default Count 