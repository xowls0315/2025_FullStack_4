import Category from "../atom/Category";
import Image from "../atom/Image";
import Price from "../atom/Price";
import Title from "../atom/Title";

const Product = (props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Image {...props} />
            <Title {...props} />
            <Price {...props} />
            <Category {...props} />
        </div>
    );
};

export default Product;
