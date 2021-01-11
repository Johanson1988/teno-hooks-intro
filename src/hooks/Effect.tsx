import React, { useEffect, useState } from "react";

const Effect: React.FC<{}> = () => {

    const [count, setCount] = useState<number>(0);

    // first render
    useEffect(() => {
        console.log('This is the first render');
    }, []);
    // any render
    useEffect(() => {
        console.log('Component has been rendered')
    });

    // When count changes

     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Effect;