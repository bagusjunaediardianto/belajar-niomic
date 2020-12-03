import React from "react";
import { Container } from "semantic-ui-react";

const MainMenu = (props) => {

  return <Container className="" style={{ marginTop: 50}}>{props.children}</Container>;
};

export default MainMenu;
