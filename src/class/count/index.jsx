import { useState } from "react"

export default function Count() {

    const [ count, setCount ] = useState(0)

    function handleIncrement() {
        setCount(count + 1)
    }

    function resetCount() {
        setCount(0)
    }

    function handleDecrement() {
        setCount(count - 1)
    }

    return (
        <div className="">
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement} >+</button>
            <button onClick={resetCount}>reset</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}