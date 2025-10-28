import GymImage from "../atom/GymImage";
import Text from "../atom/Text";

const Information = ({
    imageUrl,
    tags,
    name,
    address,
    rate,
    rateCount,
    formatProduct,
    priceObj,
}) => {
    return (
        <div className={"w-full flex gap-[10px]"}>
            <GymImage imageUrl={imageUrl} />
            <div className="flex flex-col justify-between py-1">
                <Text style={"text-sm text-gray-500"} text={tags} />
                <Text style={"text-lg font-semibold"} text={name} />
                <Text style={"text-sm text-gray-600"} text={address} />
                <Text
                    style={"text-sm text-gray-600"}
                    text={`⭐ ${rate} (${rateCount})`}
                />
                <Text
                    style={"text-sm text-gray-600"}
                    text={formatProduct(priceObj)}
                />
            </div>
        </div>
    );
};

export default Information;
