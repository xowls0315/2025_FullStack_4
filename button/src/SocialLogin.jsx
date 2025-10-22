const SocialLogin = (props) => {
    const buttonStyle = {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        width: "fit-content",
        padding: "10px 30px",
        color: "white",
        border: "none",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "10px",
        backgroundColor: props.bg,
    };

    return (
        <button style={buttonStyle}>
            <span style={{ fontSize: "30px" }}>{props.children}</span>
            <span>Login via {props.text}</span>
        </button>
    );
};

export default SocialLogin;
