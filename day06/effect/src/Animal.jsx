import { useEffect, useState } from "react";

const Animal = () => {
    const [test, setTest] = useState(false);
    const [data, setData] = useState(false);
    const animal = test ? "토끼" : "거북이";
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then(console.log);
    }, [data]);

    return (
        <div
            onClick={() => {
                setTest((prev) => !prev);
            }}
        >
            {animal}
            <button onClick={() => setData((prev) => !prev)}>
                데이터 갱신
            </button>
        </div>
    );
};

export default Animal;
