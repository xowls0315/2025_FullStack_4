const Box = ({ text }) => {
    return (
        <div className="w-[100px] h-[100px] rounded-2xl bg-pink-300 flex items-center justify-center text-white text-2xl font-bold">
            {text}
        </div>
    );
};

export default Box;
