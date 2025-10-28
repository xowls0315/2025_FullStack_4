// organism/Singup.jsx
import Form from "../molecules/Form";

// 공통 정규식/검증 함수들
const isAlphaNum = (v) => /^[a-zA-Z0-9]+$/.test(v);
const isIdLength = (v) => /^[a-zA-Z0-9]{6,20}$/.test(v);

const hasLetter = (v) => /[a-zA-Z]/.test(v);
const hasDigit = (v) => /\d/.test(v);
const hasSymbol = (v) => /[!@$%^*_+~]/.test(v);
const isPwdLength = (v) => /^[a-zA-Z0-9!@$%^*_+~]{8,20}$/.test(v);

const isEmailLike = (v) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);

const Singup = () => {
    const idRules = [
        { text: "영문/숫자", test: isAlphaNum },
        { text: "6~20자 내외", test: isIdLength },
    ];

    const passwordRules = [
        { text: "영문", test: hasLetter },
        { text: "숫자", test: hasDigit },
        { text: "특수문자(!@$%^*_+~)", test: hasSymbol },
        { text: "8~20자 내외", test: isPwdLength },
    ];

    const emailRules = [{ text: "이메일형식", test: isEmailLike }];

    return (
        <div className="flex flex-col gap-[30px]">
            {/* 아이디 */}
            <Form
                placeholder="아이디를 입력해 주세요"
                rules={idRules}
                rightButton={{
                    text: "중복 확인",
                    style: "border-gray-300 bg-gray-200 text-gray-600",
                }}
            />

            {/* 비밀번호 */}
            <Form
                placeholder="비밀번호를 입력해 주세요"
                type="password"
                rules={passwordRules}
            />

            {/* 이메일 */}
            <Form placeholder="이메일을 입력해 주세요" rules={emailRules} />
        </div>
    );
};

export default Singup;
