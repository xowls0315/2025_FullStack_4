import { motion } from "motion/react";

const Circle = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }} // 처음엔 아래쪽(+y) & 투명
            whileInView={{ opacity: 1, y: 0 }} // 스크롤로 보이면 위로 올라오며 나타남
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
                width: "100px",
                height: "100px",
                borderRadius: "999px",
                backgroundColor: "skyblue",
            }}
        ></motion.div>
    );
};

export default Circle;
