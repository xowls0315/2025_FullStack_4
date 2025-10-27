const Button = ({ text, style, click }) => {
  return (
    <div onClick={click} style={style}>
      {text}
    </div>
  );
};

export default Button;
