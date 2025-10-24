import { useState } from "react";

const Shape = () => {
    const [inputLength, setInputLength] = useState(0);

    return (
        <div>
            <input
                onChange={(e) =>
                    setInputLength((prev) => e.target.value.length)
                }
                type="text"
            />
            <span>입력한 글자수: {inputLength}</span>
        </div>
    );
};

export default Shape;
