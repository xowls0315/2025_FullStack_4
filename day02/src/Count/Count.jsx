import { useState } from "react";

const Count = ({ num }) => {
    const [count, setCount] = useState(num);

    return (
        <div
            onClick={() => {
                setCount((prev) => prev + 1);
            }}
        >
            {count}
        </div>
    );
};

export default Count;
