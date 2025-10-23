const Button = ({ button }) => {
    const buttonStyle = {
        backgroundColor: button === "Message" ? "white" : "blue",
        color: button === "Message" ? "black" : "white",
    };

    return (
        <button
            style={{
                padding: "5px 20px",
                height: "fit-content",
                fontWeight: "bold",
                border: "1px solid gray",
                borderRadius: "5px",
                fontSize: "16px",
                ...buttonStyle, // ✅ buttonStyle 객체를 한 번에 적용
            }}
        >
            {button}
        </button>
    );
};

export default Button;
