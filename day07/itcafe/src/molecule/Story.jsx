import { motion } from "motion/react";
import Text from "../atom/Text";
import { animation } from "../motion";

const Story = ({ variants, style }) => {
    return (
        <motion.div
            variants={variants}
            initial={"hidden"} // 처음엔 아래쪽(+y) & 투명
            whileInView={"visible"} // 스크롤로 보이면 위로 올라오며 나타남
            viewport={{ once: true }}
            style={style}
        >
            <Text
                text={"브라질 이파네마 농장의 언덕에는"}
                variants={animation.fadeSlideUp}
            />
            <Text
                text={"지난 10년간 같은 자리에 줄곧"}
                variants={animation.fadeSlideUp}
            />
            <Text
                text={"카페베네 팻말이 꽂혀있었습니다"}
                variants={animation.fadeSlideUp}
            />
        </motion.div>
    );
};

export default Story;
