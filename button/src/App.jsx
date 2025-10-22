import Button from "./Button";

function App() {
    return (
        <>
            <div style={{ display: "flex", gap: "50px" }}>
                <Button bg="primary" radius="hard" />
                <Button bg="primary" radius="smooth" />
                <Button bg="primary" radius="circle" />
            </div>
            <br />
            <div style={{ display: "flex", gap: "50px" }}>
                <Button bg="secondary" radius="hard" />
                <Button bg="secondary" radius="smooth" />
                <Button bg="secondary" radius="circle" />
            </div>
        </>
    );
}

export default App;
