const Image = ({ img }) => {
    return (
        <img
            style={{ width: "50px", height: "50px", borderRadius: "999px" }}
            src={img}
            alt=""
        />
    );
};

export default Image;
