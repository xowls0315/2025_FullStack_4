import Checker from "../atom/Checker";
import Text from "../atom/Text";

const CheckBox = ({ isChecked, click }) => {
    return (
        <div onClick={click} style={{ display: "flex", gap: " 10px" }}>
            <Checker isChecked={isChecked} />
            <Text text={"전체동의"} style={{ fontWeight: "700" }} />
        </div>
    );
};

export default CheckBox;
