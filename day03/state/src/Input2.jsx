import { useState } from "react";
import Input from "./Input";

const Input2 = () => {
    const [input, setInput] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);

    return (
        <>
            <Input
                onChange={(e) => {
                    setInput((prev) => e.target.value.length);
                }}
            />
            <Input
                onChange={(e) => {
                    setInput2((prev) => e.target.value.length);
                }}
            />
            <Input
                onChange={(e) => {
                    setInput3((prev) => e.target.value.length);
                }}
            />
            <span>총 글자수: {input + input2 + input3}</span>
        </>
    );
};

export default Input2;
