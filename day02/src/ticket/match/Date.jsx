const Date = ({ date, day, time }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <strong style={{ fontSize: "40px" }}>{date}</strong>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "13px",
                }}
            >
                <span style={{ color: day === "(일)" ? "red" : "black" }}>
                    {day}
                </span>
                <span>{time}</span>
            </div>
        </div>
    );
};

export default Date;
