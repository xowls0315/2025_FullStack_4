const Cookie = () => {
    const name = "태진";
    const test = { color: "pink" };

    return (
        <>
            <div style={test}>맛있는</div>
            <div>내가만든 쿠키</div>
            <div>Made by {name}</div>
        </>
    );
};

export default Cookie;
