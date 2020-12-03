import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  const [{ activeItem }, setActiveItem] = useState("home");

  const handleClick = (e, { name }) => setActiveItem({ activeItem: name });
  console.log(handleClick);

  return (
    <Menu inverted fixed="top" size="large">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleClick}
      />
      <Menu.Item
        name="about"
        active={activeItem === "about"}
        onClick={handleClick}
      />
      <Menu.Item
        name="contact-us"
        active={activeItem === "contact-us"}
        onClick={handleClick}
      />
    </Menu>
  );
};

export default Header;
