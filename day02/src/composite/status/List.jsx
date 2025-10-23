import Count from "./Count";
import Title from "./Title";

const List = (props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "20px",
                alignItems: "center",
                width: "fit-content",
            }}
        >
            <Count number={props.number} />
            <Title text={props.text} />
        </div>
    );
};

export default List;
