import React from "react";
import Styling from "./Style/Styling";
import Header from "./Component/Header";
import MainMenu from "./Component/MainMenu";
import About from "./Component/About";
import Location from "./Component/Location";

function App() {
  return (
    <div style={Styling}>
      <Header />
      <MainMenu>
        <About />
        <Location />
      </MainMenu>
    </div>
  );
}

export default App;
