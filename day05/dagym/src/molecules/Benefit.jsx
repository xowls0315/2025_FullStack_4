import Text from "../atom/Text";

const Benefit = ({ programFree, serviceFree }) => {
    return (
        <div className="flex flex-col w-full rounded-[10px] bg-[#f0f2f5] p-[10px] gap-1">
            {programFree && (
                <div className="flex gap-[12px] text-sm">
                    <Text
                        style={"whitespace-nowrap font-bold"}
                        text={"무료 프로그램"}
                    />
                    <Text style={"text-gray-700"} text={programFree} />
                </div>
            )}
            {serviceFree && (
                <div className="flex gap-[12px] text-sm">
                    <Text
                        style={"whitespace-nowrap font-bold"}
                        text={"무료 서비스"}
                    />
                    <Text style={"text-gray-700"} text={serviceFree} />
                </div>
            )}
        </div>
    );
};

export default Benefit;
