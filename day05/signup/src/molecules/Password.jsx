import { useState } from "react";
import Input from "../atom/Input";
import Validation from "../atom/Validation";

const Password = () => {
    const [pwd, setPwd] = useState("");

    const rules = [
        { text: "영문", valid: /[a-zA-Z]/.test(pwd) },
        { text: "숫자", valid: /\d/.test(pwd) },
        { text: "특수문자(!@$%^*_+~)", valid: /[!@$%^*_+~]/.test(pwd) },
        {
            text: "8~20자 내외",
            valid: /^[a-zA-Z0-9!@$%^*_+~]{8,20}$/.test(pwd),
        },
    ];

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-[10px]">
                <Input
                    type="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    text={"비밀번호를 입력해 주세요"}
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

export default Password;
