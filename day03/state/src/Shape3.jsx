import { useState } from "react";

const Shape3 = () => {
    // 클릭하면 나이가 올라감
    // 8살이면 초딩 정우(span태그)

    const [data, setData] = useState({ name: "정우", age: 1 });

    return (
        <div>
            <span>{data.name}</span>
            <button
                onClick={() => {
                    setData((prev) => {
                        if (prev.age >= 7)
                            return { name: "초딩 정우", age: prev.age + 1 };
                        else return { name: "정우", age: prev.age + 1 };
                    });
                }}
            >
                나이: {data.age}
            </button>
        </div>
    );
};

export default Shape3;
