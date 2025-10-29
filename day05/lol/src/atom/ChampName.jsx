import { toast } from "react-toastify";
import { useChamp, useLoLLine } from "../store/store";

const ChampName = ({ name }) => {
    const notify = () => toast(`${name} 선택이 되었습니다!`);

    // const updateChamp = useChamp((state) => state.updateChamp);
    const updateChampion = useLoLLine((state) => state.updateChampions);

    return (
        <span
            onClick={() => {
                updateChampion(name);
                notify();
            }}
            className="text-center mt-[10px] font-bold"
        >
            {name}
        </span>
    );
};

export default ChampName;
