import { useHover } from "@uidotdev/usehooks";

const DButton = () => {
    const [ref, hovering] = useHover();

    return (
        <>
            <button
                ref={ref}
                style={{
                    padding: "10px 30px",
                    backgroundColor: hovering ? "pink" : "green",
                }}
            >
                데스크탑 버튼
            </button>
            <button>{hovering ? "호버함" : "안함ㅋㅋ"}</button>
        </>
    );
};

export default DButton;
