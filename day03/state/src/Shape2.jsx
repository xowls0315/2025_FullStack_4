import { useState } from "react";

const Shape2 = () => {
    const [icecream, setIcecream] = useState(0);
    const [coffee, setCoffee] = useState(0);
    const [waffle, setWaffle] = useState(0);

    return (
        <div>
            <input
                onChange={(e) => {
                    setIcecream((prev) => e.target.value.length);
                }}
                placeholder="영어로 아이스크림 이름"
                type="text"
            />
            <input
                onChange={(e) => {
                    setCoffee((prev) => e.target.value.length);
                }}
                placeholder="영어로 커피 이름"
                type="text"
            />
            <input
                onChange={(e) => {
                    setWaffle((prev) => e.target.value.length);
                }}
                placeholder="영어로 와플 이름"
                type="text"
            />
            <span>이름들의 총 길이 합: {icecream + coffee + waffle}</span>
        </div>
    );
};

export default Shape2;
