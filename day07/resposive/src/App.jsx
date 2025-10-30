import DButton from "./Desktop/DButton";
import Gumba from "./Gumba";
import MButton from "./Mobile/MButton";
import useIsMobile from "./hooks/useIsMobile";

function App() {
    // const isMobile = useIsMobile();

    // return <>{isMobile ? <MButton /> : <DButton />}</>;

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Gumba />
        </div>
    );
}

export default App;
