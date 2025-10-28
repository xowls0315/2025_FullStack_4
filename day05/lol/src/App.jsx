import { data as champData } from "./champ";

import Champions from "./organism/Champions";

function App() {
    console.log(champData);

    const champs = Object.values(champData.data); // ← 배열로 변환

    console.log(champs);

    return (
        <>
            <Champions champs={champs} />
        </>
    );
}

export default App;
