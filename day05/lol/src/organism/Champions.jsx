import Champ from "../molecules/Champ";

const Champions = ({ champs }) => {
    // 이름순(ㄱ~ㅎ) 정렬
    const sortedChamps = [...champs].sort((a, b) =>
        a.name.localeCompare(b.name, "ko-KR")
    );

    return (
        <div className="container mx-auto grid grid-cols-6 gap-[10px]">
            {/* https://ddragon.leagueoflegends.com/cdn/15.21.1/img/champion/Aatrox.png */}

            {sortedChamps.map((champ) => (
                <Champ
                    key={champ.id}
                    image={champ.image.full}
                    name={champ.name}
                    description={champ.blurb}
                />
            ))}
        </div>
    );
};

export default Champions;
