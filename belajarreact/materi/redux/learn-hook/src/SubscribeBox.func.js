import React, { useState } from "react";
import useCounter from "./useCounter";

// init, read, update
// teknik share logic => custom hook
const SubscribeBox = () => {
  const [state, setState] = useState({
    subscribe: false,
    // like: 0,
    dislike: 0,
  });

  const [like, handleLike, handleTriple] = useCounter(0);
  const [dislike, handleDislike] = useCounter(0);
  const handleSubscribe = () => {
    setState({
      ...state,
      subscribe: !state.subscribe,
    });
  };

  return (
    <div>
      <p>
        <button onClick={handleSubscribe}>Subscribe</button>
        <span>{JSON.stringify(state.subscribe)}</span>
      </p>
      <p>
        <button onClick={handleLike}>Like</button>
        <span> {like}</span>
      </p>
      <p>
        <button onClick={handleDislike}>Dislike</button>
        <span>{dislike}</span>
      </p>
      <p>
        <button onClick={handleTriple}>Triple Like</button>
        <span>{like}</span>
      </p>
    </div>
  );
};

export default SubscribeBox;
