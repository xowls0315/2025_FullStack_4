const Team = ({ homeImg, awayImg }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img
                style={{ width: "100px", objectFit: "cover" }}
                src={homeImg}
                alt=""
            />
            <span style={{ fontSize: "25px" }}>VS</span>
            <img
                style={{ width: "100px", objectFit: "cover" }}
                src={awayImg}
                alt=""
            />
        </div>
    );
};

export default Team;
