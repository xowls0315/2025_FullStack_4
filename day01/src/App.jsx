import SocialLogin from "./SocialLogin";
import { CiFacebook } from "react-icons/ci";
import { FaApple, FaDribbble, FaTwitch } from "react-icons/fa";

function App() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                <SocialLogin text={"Facebook"} bg={"#1877F2"}>
                    <CiFacebook />
                </SocialLogin>
                <SocialLogin text={"Apple"} bg={"#000000"}>
                    <FaApple />
                </SocialLogin>
                <SocialLogin text={"Dribbble"} bg={"#EA4C89"}>
                    <FaDribbble />
                </SocialLogin>
                <SocialLogin text={"Twitch"} bg={"#9146FF"}>
                    <FaTwitch />
                </SocialLogin>
            </div>
        </>
    );
}

export default App;
