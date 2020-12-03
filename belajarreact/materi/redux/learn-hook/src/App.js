import React, { useState } from "react";
// import SubscribeBox from "./SubscribeBox.func";
// import MyFunc from "./MyFunc";
import NewsFeed from "./NewsFeed";
function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((currentState) => !currentState);
  };

  return (
    <div>
      <h2>Halaman App</h2>
      <button onClick={handleToggle}>Toggle</button>
      {/* {toggle && <MyClass />} */}
      {toggle && <NewsFeed />}
      {/* <SubscribeBox /> */}
    </div>
  );
}

export default App;
