import { motion } from "motion/react";

const Text = ({ text, variants }) => {
    return <motion.span variants={variants}>{text}</motion.span>;
};

export default Text;
