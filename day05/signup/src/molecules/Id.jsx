import { useState } from "react";
import Input from "../atom/Input";
import Button from "../atom/Button";
import Validation from "../atom/Validation";

const Id = () => {
    const [idValue, setIdValue] = useState("");

    const rules = [
        { text: "영문/숫자", valid: /^[a-zA-Z0-9]+$/.test(idValue) },
        { text: "6~20자 내외", valid: /^[a-zA-Z0-9]{6,20}$/.test(idValue) },
    ];

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-[10px]">
                <Input
                    value={idValue}
                    onChange={(e) => setIdValue(e.target.value)}
                    text={"아이디를 입력해 주세요"}
                />
                <Button
                    text={"중복 확인"}
                    style={"border-gray-300 bg-gray-200 text-gray-600"}
                />
            </div>

            <div className="flex items-center gap-[25px]">
                {rules.map(({ text, valid }) => (
                    <Validation text={text} valid={valid} />
                ))}
            </div>
        </div>
    );
};

export default Id;
