import { useState } from "react";
import Counter from "./Counter";

function App() {
    const [count, setCount] = useState(0);
    const price = 1500;

    return (
        <>
            <Counter
                count={count}
                plus={() => setCount((prev) => prev + 1)}
                minus={() => setCount((prev) => (count === 0 ? 0 : prev - 1))}
            />
            <span>총 가격: {count * price}</span>
        </>
    );
}

export default App;
