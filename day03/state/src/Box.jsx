import { useState } from "react";

const Box = () => {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "navy",
        "purple",
    ];

    const [index, setIndex] = useState(0);

    return (
        <div
            onClick={() => setIndex((prev) => (prev + 1) % colors.length)}
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: colors[index],
            }}
        ></div>
    );
};

export default Box;
