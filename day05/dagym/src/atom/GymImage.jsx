const GymImage = ({ imageUrl }) => {
    return (
        <div
            className={`w-[120px] h-[140px] rounded-[10px] bg-cover bg-center bg-[#eee]`}
            style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
        />
    );
};

export default GymImage;
