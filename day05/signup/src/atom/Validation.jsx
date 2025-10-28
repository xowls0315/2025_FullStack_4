import { FaCheck } from "react-icons/fa";

const Validation = ({ text, valid }) => {
    return (
        <span
            className={`flex items-center gap-[5px] ${
                valid ? "text-green-500" : "text-gray-200"
            }`}
        >
            <FaCheck />
            {text}
        </span>
    );
};

export default Validation;
