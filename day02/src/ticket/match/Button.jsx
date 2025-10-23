const Button = ({ text }) => {
    const buttonStyle = {
        backgroundColor: text === "예매하기" ? "#fa2828" : "gainsboro",
        color: text === "예매하기" ? "white" : "gray",
    };

    // text가 "2025.11.03(월) 11:00 오픈예정"처럼 공백으로 구분되어 있을 때
    const parts = text.split(" "); // ["2025.11.03(월)", "11:00", "오픈예정"]

    return (
        <div>
            <button
                style={{
                    width: "150px",
                    padding: "10px 0px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    border: "none",
                    ...buttonStyle,
                }}
                onClick={() => {
                    alert("예매하나요?");
                }}
            >
                {text === "예매하기" ? (
                    text
                ) : (
                    <>
                        {parts[0]} <br />
                        {parts.slice(1).join(" ")}
                    </>
                )}
            </button>
        </div>
    );
};

export default Button;
