import React, { useState } from 'react'
import { Button, Container, Image, Menu } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom'
import { CreateArticle } from './Component/Article/CreateArticle'
import { DetailArticle } from './Component/Article/DetailArticle'
import { EditArticle } from './Component/Article/EditArticle'
import { ListArticle } from './Component/Article/ListArticle'
import { GlobalProvider } from './Context/GlobalStates'
import mainLogo from './assets/dominos.png'

function App() {
  const [activeItem, setActiveItem] = useState({})

  const handleClick = (e, { name }) => {
    setActiveItem(name)
    e.preventDefault()
  }
  return (
    <GlobalProvider>
      <Container fluid computer={5} tablet={8} mobile={16} >
        <Menu computer={5} tablet={8} mobile={16} stackable pointing borderless>
          <Image src={mainLogo} alt="logo" style={{ width: "4em", height: "4em" }} />
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleClick}
          >
            Home
        </Menu.Item>
          <Menu.Item
            name="articles"
            active={activeItem === "articles"}
            as={Link}
            to={"/articles"}
            onClick={handleClick}
          >
            Articles
        </Menu.Item>
          <Menu.Item
            name="transactions"
            active={activeItem === "transactions"}
            onClick={handleClick}
          >
            Transactions
        </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button color="blue" size="small" fluid content="Login" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container>
          <Switch>
            <Route path="/articles" exact component={ListArticle} />
            <Route path="/articles/create" exact component={CreateArticle} />
            <Route path="/articles/edit/:id" exact component={EditArticle} />
            <Route path="/articles/detail/:id" exact component={DetailArticle} />
          </Switch>
        </Container>
      </Container>
    </GlobalProvider>
  );
}

export default App;
