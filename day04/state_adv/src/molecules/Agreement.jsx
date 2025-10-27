import CheckIcon from "../atom/CheckIcon";
import Text from "../atom/Text";

const Agreement = ({ isNecessary, details, click, isAgree }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div
                style={{ display: "flex", alignItems: "center" }}
                onClick={click}
            >
                <CheckIcon style={{ color: isAgree ? "black" : "#ebebeb" }} />
                <Text
                    style={{ color: isAgree ? "black" : "#ebebeb" }}
                    text={isNecessary ? "[필수]" : "[선택]"}
                />
                <Text
                    style={{ color: isAgree ? "black" : "#ebebeb" }}
                    text={details}
                />
            </div>
            <Text text={"보기"} style={{ textDecoration: "underline" }} />
        </div>
    );
};

export default Agreement;
