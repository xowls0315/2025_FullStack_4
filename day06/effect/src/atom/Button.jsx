const Button = ({ text, onClick, active }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                backgroundColor: active ? "skyblue" : "#e5e7eb", // 활성/비활성 색
                transition: "all 0.5s",
            }}
        >
            {text}
        </button>
    );
};

export default Button;
