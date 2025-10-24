import { useState } from "react";

const Box2 = () => {
    const sizes = ["small", "medium", "large"];

    const sizeValues = {
        small: "10px",
        medium: "50px",
        large: "100px",
    };

    const colors = ["black", "red", "pink", "yellow"];

    const [sizeIndex, setSizeIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const boxSize = sizes[sizeIndex];
    const backgroundColor = colors[colorIndex];

    return (
        <>
            <div
                style={{
                    width: sizeValues[boxSize],
                    height: sizeValues[boxSize],
                    backgroundColor,
                }}
            ></div>
            <button
                onClick={() =>
                    setSizeIndex((prev) => (prev + 1) % sizes.length)
                }
            >
                {boxSize}
            </button>
            <button
                onClick={() =>
                    setColorIndex((prev) => (prev + 1) % colors.length)
                }
            >
                {backgroundColor}
            </button>
        </>
    );
};

export default Box2;
