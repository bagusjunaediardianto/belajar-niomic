import React, { useState, useCallback, useMemo } from "react";
import Layout from "./Layout";

// cara pertama, dengan global variable
// const user = {
//   name: "Bagus",
// };
function App() {
  const [count, setCount] = useState(0);
  // const user = {
  //   name: "Bagus",
  // };

  // cara ketiga
  const [user, setUser] = useState({
    nama: "Bagus",
  });

  //
  const likeAction = () => setCount((current) => current + 1);

  const heavyProcess = (dataUser) => {
    sleep(2000);
    return dataUser;
  };

  const memoizedLikeAction = useCallback(likeAction, []);
  const userProp = useMemo(() => heavyProcess(user), [user]);

  console.log("Parent Component Rendered");
  return (
    <Layout>
      <p>
        <i>-- Parent Component --</i>
      </p>
      <button onClick={likeAction}>Like {count} </button>
      <MemoizedChildComponent
        title="Hello"
        user={userProp}
        action={memoizedLikeAction}
      />
    </Layout>
  );
}

function ChildComponent({ title, user, action }) {
  // sleep(2000); // heavy process simulation
  console.log("Child Component rendered");
  return (
    <>
      <p>
        <br />
        <i> -- Child Component --</i>
      </p>
      <h1>
        {title}, {user.name}
      </h1>
      <button onClick={action}> Like </button>
    </>
  );
}

function compare(prevProps, nextProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

// cara kedua, menggunakan custom function, membandingkan 2 buah string
// const MemoizedChildComponent = React.memo(ChildComponent, compare);

// cara ketiga menjadikan kedalam state
const MemoizedChildComponent = React.memo(ChildComponent);

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export default App;
