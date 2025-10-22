const Button = (props) => {
    const colorMap = {
        primary: "#205BF3",
        secondary: "#478DF5",
    };

    const radiusMap = {
        hard: "0px",
        smooth: "5px",
        circle: "10px",
    };

    const buttonStyle = {
        padding: "10px 30px",
        color: "white",
        border: "none",
        fontSize: "24px",
        backgroundColor: colorMap[props.bg],
        borderRadius: radiusMap[props.radius],
    };

    return <button style={buttonStyle}>Button</button>;
};

export default Button;
