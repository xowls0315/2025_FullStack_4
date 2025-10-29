const ChampImage = ({ image, description }) => {
    return (
        <div
            onClick={() => alert(description)}
            className="w-full pt-[100%] rounded-[10px] bg-center bg-cover"
            style={{
                backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/${image})`,
            }}
        />
    );
};

export default ChampImage;
