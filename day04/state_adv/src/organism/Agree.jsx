import { useState } from "react";
import Agreement from "../molecules/Agreement";
import AgreementWith from "../molecules/AgreementWith";
import CheckBox from "../molecules/CheckBox";
import NextButton from "../molecules/NextButton";

const Agree = () => {
    const [agreements, setAgreements] = useState({
        first: false,
        second: false,
        third: false,
        fourth: { sms: false, email: false },
    });

    // ✅ 전체 체크 여부: fourth는 객체라서 하위 필드까지 확인해야 함
    const allChecked =
        agreements.first &&
        agreements.second &&
        agreements.third &&
        agreements.fourth.sms &&
        agreements.fourth.email;

    // ✅ 전체동의 클릭: 모두 true/false로 일괄 설정
    const toggleAll = () => {
        setAgreements({
            first: !allChecked,
            second: !allChecked,
            third: !allChecked,
            fourth: { sms: !allChecked, email: !allChecked },
        });
    };

    return (
        <>
            {/* ✅ isChecked와 click을 정확히 전달 */}
            <CheckBox isChecked={allChecked} click={toggleAll} />

            <div style={{ display: "flex", flexDirection: "column" }}>
                <Agreement
                    click={() =>
                        setAgreements((prev) => ({
                            ...prev,
                            first: !prev.first,
                        }))
                    }
                    isAgree={agreements.first}
                    isNecessary={true}
                    details={"서비스 이용약관 동의"}
                />
                <Agreement
                    click={() =>
                        setAgreements((prev) => ({
                            ...prev,
                            second: !prev.second,
                        }))
                    }
                    isAgree={agreements.second}
                    isNecessary={true}
                    details={"개인정보 수집 이용 동의서"}
                />
                <Agreement
                    click={() =>
                        setAgreements((prev) => ({
                            ...prev,
                            third: !prev.third,
                        }))
                    }
                    isAgree={agreements.third}
                    isNecessary={false}
                    details={"마케팅 활용 동의"}
                />
                <AgreementWith
                    allClick={() =>
                        setAgreements((prev) => ({
                            ...prev,
                            fourth: Object.values(prev.fourth).some((v) => v)
                                ? { sms: false, email: false }
                                : { sms: true, email: true },
                        }))
                    }
                    smsClick={() =>
                        setAgreements((prev) => ({
                            ...prev,
                            fourth: {
                                sms: !prev.fourth.sms,
                                email: prev.fourth.email,
                            },
                        }))
                    }
                    emailClick={() =>
                        setAgreements((prev) => ({
                            ...prev,
                            fourth: {
                                sms: prev.fourth.sms,
                                email: !prev.fourth.email,
                            },
                        }))
                    }
                    isAgree={agreements.fourth}
                    isNecessary={false}
                    details={"광고성 정보 수신 동의"}
                />
            </div>
            <NextButton isClick={agreements.first && agreements.second} />
        </>
    );
};

export default Agree;
