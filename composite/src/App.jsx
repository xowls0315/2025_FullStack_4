import StatusBar from "./alarm/StatusBar";

function App() {
    const profile = [
        { img: "man.jpg", name: "martini_rond", button: "Message" },
        { img: "man2.jpg", name: "maxjacobson", button: "Message" },
        { img: "woman.jpg", name: "mis_potter", button: "Follow" },
    ];

    return (
        <section
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
            {profile.map((user, index) => (
                <StatusBar
                    key={index}
                    img={user.img}
                    name={user.name}
                    button={user.button}
                />
            ))}
        </section>
    );
}

export default App;
