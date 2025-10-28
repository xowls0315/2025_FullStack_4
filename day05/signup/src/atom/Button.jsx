const Button = ({ style, text }) => {
    return (
        <button className={`p-[5px] border rounded-[20px] font-bold ${style}`}>
            {text}
        </button>
    );
};

export default Button;
