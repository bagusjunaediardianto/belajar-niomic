import React, { useContext } from "react";
import AppContext from "./AppContext";
import "./App.css";

// If No Provider, Consumer use default value
const { LangContext, ThemeContext, LangProvider, ThemeProvider } = AppContext;

function LangPage() {
  return (
    <LangProvider>
      <ThemeProvider>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </LangProvider>
  );
}

const Header = () => {
  return (
    <>
      <i>-- Header --</i>
      <Menu />
    </>
  );
};

const Menu = () => {
  const props = useContext(LangContext);
  const themeProps = useContext(ThemeContext);
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>
          Language
          <select value={props.lang} onChange={props.changeLang}>
            <option value=" 🇮🇩"> 🇮🇩 Indonesia</option>
            <option value="🇬🇧">🇬🇧 English</option>
          </select>
        </li>
        <li>
          Theme
          <select value={themeProps.theme} onChange={themeProps.changeTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

function Content() {
  return (
    <>
      <i>-- Content --</i>
    </>
  );
}

function Footer() {
  const props = useContext(LangContext);
  const themeProps = useContext(ThemeContext);
  return (
    <>
      <i>--Footer--</i>
      <p>Language : {props.lang}</p>
      <p>Theme : {themeProps.theme}</p>
    </>
  );
}

export default LangPage;
