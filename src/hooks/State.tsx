import React, {useState} from "react";

const State: React.FC<{initialCount: number}> = ({
    initialCount,
}) => {
    const [count, setCount] = useState<number>(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }

  export default State;