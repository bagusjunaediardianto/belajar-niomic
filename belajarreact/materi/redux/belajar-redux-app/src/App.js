import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Menu, Button } from "semantic-ui-react";
import Beranda from "./Component/Beranda";

const App = () => {
  const Images = [
    "https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg",
    "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg",
    "https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835__480.jpg",
    "https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437__480.png",
    "https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg",
    "https://cdn.pixabay.com/photo/2017/12/18/13/03/grain-3026099__480.jpg",
    "https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767982__480.jpg",
    "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg",
  ];

  const goTo = (route) => {
    this.props.history.replace(`/${route}`);
  };

  const login = () => {
    this.props.auth.login();
  };

  const logout = () => {
    this.props.auth.logout();
  };

  useEffect(() => {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  });
  const { isAuthenticated } = this.props.auth;
  return (
    <Container fluid>
      <Menu pointing inverted color="blue" fluid>
        <Menu.Item
          name="Home"
          active={(this.props.activeItem = "home")}
          onClick={() => goTo("home")}
        />
        <Menu.Item
          name="Film"
          active={(this.props.activeItem = "film")}
          onClick={() => goTo("film")}
        />
        <Menu.Item
          name="Actor"
          active={(this.props.activeItem = "actor")}
          onClick={() => goTo("actor")}
        />
        <Menu.Menu position="right">
          <Menu.Item
            {...(!isAuthenticated() && (
              <Button onClick={() => login()} color="green" content="Log in" />
            ))}
            {...(isAuthenticated() && (
              <Button onClick={() => logout()} color="red" content="Log out" />
            ))}
          />
        </Menu.Menu>
      </Menu>
      {this.props.activeItem === "beranda" && <Beranda Images={Images} />}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
  };
};
export default connect(mapStateToProps)(App);
