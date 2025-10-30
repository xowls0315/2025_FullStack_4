import Story from "./molecule/Story";
import { containerVariant } from "./motion";

function App() {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundImage:
                    "url('https://github.com/xowls0315/Nextjs_Cafe/blob/master/public/story-1.jpg?raw=true')",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Story
                variants={containerVariant}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "white",
                    fontSize: "35px",
                    fontWeight: "bold",
                }}
            />
        </div>
    );
}

export default App;
