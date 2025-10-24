const Counter = ({ count, plus, minus }) => {
    // 아메리카노 - 1500원

    return (
        <div>
            <button onClick={minus}>-</button>
            <span>아메리카노 갯수: {count}</span>
            <button onClick={plus}>+</button>
        </div>
    );
};

export default Counter;
