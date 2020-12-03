import React, { useState } from 'react';
import {Button, Menu, Segment} from 'semantic-ui-react'
import Logo from '../assets/images/logo.png';
function Header() {
  const [activeItem, setActiveItem] = useState("home")
  
  const handleClick = (e, {name})=> setActiveItem(name)
  return (
    <Segment>
        <Menu size="large" secondary pointing>
          <Menu.Item>
            <img src={Logo} alt="logo" />
          </Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleClick}
          />
          <Menu.Item
            name="fitur"
            active={activeItem === "fitur"}
            onClick={handleClick}
          />
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={handleClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
            <Button primary>sign up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        </Segment>
  );
}

export default Header;
