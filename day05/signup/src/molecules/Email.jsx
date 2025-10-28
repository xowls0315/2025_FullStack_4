import { useState } from "react";
import Input from "../atom/Input";
import Validation from "../atom/Validation";

const Email = () => {
    const [email, setEmail] = useState("");

    const rules = [
        {
            text: "이메일형식",
            valid: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                email
            ),
        },
    ];

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-[10px]">
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    text={"이메일을 입력해 주세요"}
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

export default Email;
