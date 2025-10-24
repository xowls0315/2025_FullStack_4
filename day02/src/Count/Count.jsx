import { useState } from "react";

const Count = ({ num }) => {
    const [count, setCount] = useState(num);

    return (
        <>
            <div>{count}</div>
            <button
                onClick={() => {
                    setCount((prev) => prev - 10);
                }}
            >
                -10
            </button>
            <button
                onClick={() => {
                    setCount((prev) => prev - 1);
                }}
            >
                -1
            </button>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                +1
            </button>
            <button
                onClick={() => {
                    setCount((prev) => prev + 10);
                }}
            >
                +10
            </button>
        </>
    );
};

export default Count;
