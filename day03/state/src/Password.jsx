import { useState } from "react";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";

// 리액트
// 0. jsx: javascript + html
// 1. 컴포넌트와 Props: 부품화, 부품을 커스터마이징
// 2. State: 부품에서 모양이 바뀜

const Password = () => {
    const [show, setShow] = useState(false);

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <input
                type={show ? "text" : "password"}
                placeholder="비밀번호 입력"
                style={{
                    padding: "8px 30px 8px 8px",
                    fontSize: "16px",
                }}
            />
            {show ? (
                <FaRegEyeSlash
                    onClick={() => setShow((prev) => !prev)}
                    style={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                    }}
                />
            ) : (
                <FaEye
                    onClick={() => setShow((prev) => !prev)}
                    style={{
                        position: "absolute",
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                    }}
                />
            )}
        </div>
    );
};

export default Password;
