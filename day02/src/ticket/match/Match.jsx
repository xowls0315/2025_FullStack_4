import Button from "./Button";
import Date from "./Date";
import Fixture from "./Fixture";
import Place from "./Place";
import Team from "./Team";

const Match = ({
    date,
    day,
    time,
    homeImg,
    awayImg,
    home,
    away,
    place,
    text,
}) => {
    return (
        <article
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                gap: "50px",
                border: "1px solid red",
            }}
        >
            <Date {...{ date, day, time }} />
            <Team {...{ homeImg, awayImg }} />
            <Fixture {...{ home, away }} />
            <Place {...{ place }} />
            <Button {...{ text }} />
        </article>
    );
};

export default Match;
