import { motion } from "motion/react";

const Car = () => {
    return (
        <motion.span
            animate={{
                x: [0, 80, 160, 80, 0, -80, -160, -80, 0],
                y: [0, -80, 0, 80, 0, -80, 0, 80, 0],
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
            }}
            style={{
                fontSize: "50px",
                display: "inline-block",
            }}
        >
            🚗
        </motion.span>
    );
};

export default Car;
