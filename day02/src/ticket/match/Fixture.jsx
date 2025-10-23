const Fixture = ({ home, away }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <button
                style={{
                    width: "fit-content",
                    backgroundColor: "transparent",
                    borderRadius: "15px",
                    fontWeight: "bold",
                    color: "#f56c36",
                    border: "2px solid #f56c36",
                }}
            >
                취소표 대기 >
            </button>
            <strong>
                {home} vs {away}
            </strong>
        </div>
    );
};

export default Fixture;
