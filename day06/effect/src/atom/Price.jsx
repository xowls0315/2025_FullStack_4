const Price = ({ price }) => {
    return (
        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            {`${price}$`}
        </span>
    );
};

export default Price;
