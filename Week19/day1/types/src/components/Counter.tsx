// import { ReactNode } from "react";

interface CounterProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    // children: ReactNode;
    count: number;
}

const Counter = ({ count, setCount}: CounterProps) => {
    return (
        
        <>
        <h2>Counter</h2>
        {/* {children}  */}
        {count}
        <button onClick={() => setCount((prev) => prev + 1)}> + </button>
        <button onClick={() => setCount((prev) => prev - 1)}> - </button>
        
    </>
    )
}

export default Counter