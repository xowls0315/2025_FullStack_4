const Image = ({ thumbnail }) => {
    return (
        <img
            src={thumbnail}
            alt=""
            style={{
                width: "300px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
            }}
        />
    );
};

export default Image;
