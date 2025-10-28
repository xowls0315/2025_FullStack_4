const Input = ({ text, value, onChange, className = "", type = "text" }) => {
    return (
        <input
            className={`w-[500px] border border-gray-300 rounded-md px-3 py-2 ${className}`}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={text}
        />
    );
};

export default Input;
