import React from "react";
import { connect } from "react-redux";
const Counter = (props) => {
  console.log("render =>", props);
  return (
    <div>
      <h1>Saya mesin penghitung</h1>
      <p>Count : {props.count}</p>
      <button onClick={props.onDecrementClick}>Decrement</button>
      <button onClick={props.onIncrementClick}>increment</button>
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log("mapStatetoProps", state);
  return {
    count: state.count,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onIncrementClick: () => {
      console.log("tombol increment di klik");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick: () => {
      console.log("tombol decrement di klik");
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
