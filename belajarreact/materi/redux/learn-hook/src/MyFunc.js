import React, { useState, useEffect } from "react";

function MyFunc() {
  console.log("-> function init");
  const [count, setCount] = useState(0);

  const handleCount = () =>
    setCount((prevState) => {
      return prevState + 1;
    });

  useEffect(() => {
    //   will run every render
    console.log("-> my first effect");
  });

  // componentDidMount quivalent
  useEffect(() => {
    console.log("-> componentDidMount equivalent");
  }, []);

  //   componentDidUpdate equivalent
  useEffect(() => {
    if (count > 0) {
      console.log("-> componentDidUpdate equivalent");
    }
  }, [count]);

  //   componentWillUnMount equivalent
  useEffect(() => {
    // clean-up function
    return () => {
      console.log("-> componentWillUnMount equivalent");
    };
  }, []);

  console.log(`-> start render (${count})`);
  return (
    <div>
      <h1> Function Component</h1>
      <p>
        <button onClick={handleCount}>Count</button>
        {count}
      </p>
    </div>
  );
}

export default MyFunc;
