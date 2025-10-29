import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Loading = () => {
    return (
        <div
            style={{
                height: "100vh",
                display: "grid",
                placeItems: "center",
            }}
        >
            <ClimbingBoxLoader color="#36d7b7" size={50} />
        </div>
    );
};

export default Loading;
