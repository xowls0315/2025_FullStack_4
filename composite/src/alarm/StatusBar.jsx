import Button from "./Button";
import Content from "./Content";
import Image from "./Image";

const StatusBar = ({ img, name, button }) => {
    return (
        <div
            style={{
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: "30px",
            }}
        >
            <Image img={img} />
            <Content name={name} />
            <Button button={button} />
        </div>
    );
};

export default StatusBar;
