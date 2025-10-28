import { data } from "./dagym";
import Gym from "./organism/Gym";

function App() {
    console.log(data);
    // 안전하게 리스트 뽑기
    const lite = data?.result?.liteAdList ?? [];
    const centers = data?.result?.centerList ?? [];

    // 하나의 배열로 합치기 (광고 + 일반 센터)
    const items = [...lite, ...centers];

    return (
        <div className={"w-[100vw] max-w-[768px] mx-auto flex flex-col"}>
            {items.map((item) => (
                <Gym item={item} />
            ))}
        </div>
    );
}

export default App;
