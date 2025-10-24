const Input = ({ onChange }) => {
    return (
        <div
            style={{
                border: "1px solid #ebebeb",
                width: "fit-content",
                padding: "4px 6px",
            }}
        >
            <input
                onChange={onChange}
                style={{ outline: "none", border: "none" }}
                placeholder=""
                type="text"
            />
        </div>
    );
};

export default Input;
