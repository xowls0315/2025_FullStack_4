import { motion } from "motion/react";

const Square = () => {
    return (
        <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 400, transition: { duration: 3 } }}
            style={{ width: "100px", height: "100px", backgroundColor: "pink" }}
        ></motion.div>
    );
};

export default Square;
