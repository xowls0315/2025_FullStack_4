import { useMouse } from "@uidotdev/usehooks";

const Gumba = () => {
    const [mouse, ref] = useMouse();

    return (
        <div
            ref={ref}
            style={{
                cursor: "none",
                transform: "translate(-25px, -25px)",
                position: "relative",
                top: mouse.y,
                left: mouse.x,
                width: "50px",
                height: "50px",
            }}
        >
            <img
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}
                src="https://www.vhv.rs/dpng/d/448-4480024_super-mario-bros-super-mario-gumba-hd-png.png"
            ></img>
        </div>
    );
};

export default Gumba;
