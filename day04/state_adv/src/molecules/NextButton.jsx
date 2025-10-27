import Button from "../atom/Button";

const NextButton = ({ isClick }) => {
  return (
    <Button
      text={"다음"}
      style={{
        borderRadius: "50px",
        width: "480px",
        height: "70px",
        display: "flex",
        color: isClick ? "white" : "black",
        backgroundColor: isClick ? "black" : "#ebebeb",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
      }}
    />
  );
};

export default NextButton;
