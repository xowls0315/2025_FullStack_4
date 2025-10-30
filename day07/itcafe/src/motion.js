export const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // 자식 간 0.3초 간격으로 순차 실행
        },
    },
};

export const animation = {
    fadeSlideUp: {
        hidden: { opacity: 0, y: 70 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    },
};
