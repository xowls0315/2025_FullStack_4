import { data as champData } from "./champ";
import { ToastContainer } from "react-toastify";

import Champions from "./organism/Champions";
import { useChamp, useLoLLine } from "./store/store";

// 챔피언 다섯개 누르면 -> {top: a, jg:b, mid:c, ad:d, sup:e}

function App() {
    // const champ = useChamp((state) => state.champ);
    const championsLine = useLoLLine((state) => state.champions);

    // console.log(champion);
    console.log(championsLine);

    // console.log(champData);

    const champs = Object.values(champData.data); // ← 배열로 변환

    console.log(champs);

    return (
        <>
            <button onClick={() => console.log(championsLine)}>
                선택된 챔프 이름
            </button>
            <Champions champs={champs} />
            <ToastContainer />
        </>
    );
}

export default App;
