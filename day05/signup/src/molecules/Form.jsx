import { useState } from "react";
import Input from "../atom/Input";
import Button from "../atom/Button";
import Validation from "../atom/Validation";

const Form = ({ placeholder, type = "text", rules = [], rightButton }) => {
    const [value, setValue] = useState("");

    // 현재 value에 대한 검증 결과 계산
    const results = rules.map(({ text, test }) => ({
        text,
        valid: typeof test === "function" ? test(value) : false,
    }));

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-[10px]">
                <Input
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    text={placeholder}
                />
                {rightButton && (
                    <Button
                        text={rightButton.text}
                        style={
                            rightButton.style ??
                            "border-gray-300 bg-gray-200 text-gray-600"
                        }
                        onClick={() => rightButton.onClick?.(value)}
                    />
                )}
            </div>

            {rules.length > 0 && (
                <div className="flex items-center gap-[25px]">
                    {results.map(({ text, valid }) => (
                        <Validation key={text} text={text} valid={valid} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Form;
