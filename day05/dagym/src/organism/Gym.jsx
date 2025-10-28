import Text from "../atom/Text";
import Benefit from "../molecules/Benefit";
import Information from "../molecules/Information";

const formatPrice = (price) =>
    typeof price === "number" ? `${price.toLocaleString("ko-KR")}원` : "-";

const formatTags = (tags = []) =>
    Array.isArray(tags) && tags.length ? tags.join(" / ") : "";

const formatProduct = (price) => {
    if (!price) return "";
    const { productName, productType, periodUnit, period, count } = price;
    // period/횟수 정보 보조 표기
    const sub =
        productType === "period" && period && periodUnit
            ? ` · ${period}${periodUnit === "month" ? "개월" : periodUnit}`
            : productType === "count" && count
            ? ` · ${count}회`
            : "";
    return `${productName ?? ""}${sub}`;
};

const Gym = ({ item }) => {
    const imageUrl = item?.gymPhotoSmall || item?.gymPhotoBig;
    const name = item?.gymName ?? "-";
    const address = item?.address ?? "-";
    const rate = item?.review?.rate ?? 0;
    const rateCount = item?.review?.count ?? 0;

    // 가격(우선 dagymPrice, 없으면 defaultPrice)
    const priceObj = item?.price;
    const dagymPrice = priceObj?.dagymPrice ?? priceObj?.defaultPrice ?? null;

    const programFree = item?.program?.free || ""; // 무료 프로그램 문구
    const serviceFree = item?.service?.free || ""; // 무료 서비스 문구
    const tags = formatTags(item?.tags);

    return (
        <div className={"w-full p-[15px] flex flex-col gap-3 rounded-[12px]"}>
            {/* 상단: 이미지 + 기본 정보 */}
            <Information
                imageUrl={imageUrl}
                tags={tags}
                name={name}
                address={address}
                rate={rate}
                rateCount={rateCount}
                formatProduct={formatProduct}
                priceObj={priceObj}
            />

            {/* 가격 */}
            <div className="flex justify-end">
                <Text
                    style={"text-base font-bold"}
                    text={formatPrice(dagymPrice)}
                />
            </div>

            {/* 무료 혜택 */}
            {(programFree || serviceFree) && (
                <Benefit programFree={programFree} serviceFree={serviceFree} />
            )}
        </div>
    );
};

export default Gym;
