import CheckIcon from "../atom/CheckIcon";
import Text from "../atom/Text";

const AgreementWith = ({
    isNecessary,
    details,
    isAgree,
    allClick,
    smsClick,
    emailClick,
}) => {
    // const [isAgree, setIsAgree] = useState({ sms: false, email: false });

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                style={{ display: "flex", alignItems: "center" }}
                onClick={allClick}
                // onClick={() => {
                //   setIsAgree((prev) => (Object.values(prev).some((v) => v) ? { sms: false, email: false } : { sms: true, email: true }));
                // }}
            >
                <CheckIcon
                    style={{
                        color:
                            isAgree.sms || isAgree.email ? "black" : "#ebebeb",
                    }}
                />
                <Text
                    style={{
                        color:
                            isAgree.sms || isAgree.email ? "black" : "#ebebeb",
                    }}
                    text={isNecessary ? "[필수]" : "[선택]"}
                />
                <Text
                    style={{
                        color:
                            isAgree.sms || isAgree.email ? "black" : "#ebebeb",
                    }}
                    text={details}
                />
            </div>
            <div
                style={{
                    margin: "10px 0 0 10px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    onClick={smsClick}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <CheckIcon
                        style={{ color: isAgree.sms ? "black" : "#ebebeb" }}
                    />
                    <Text
                        style={{ color: isAgree.sms ? "black" : "#ebebeb" }}
                        text={"SMS"}
                    />
                </div>
                <div
                    onClick={emailClick}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <CheckIcon
                        style={{ color: isAgree.email ? "black" : "#ebebeb" }}
                    />
                    <Text
                        style={{ color: isAgree.email ? "black" : "#ebebeb" }}
                        text={"이메일"}
                    />
                </div>
            </div>
        </div>
    );
};

export default AgreementWith;
