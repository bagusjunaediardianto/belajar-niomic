import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import { CreateArticle } from './components/CreateArticle'
import { DetailArticle } from './components/DetailArticle'
import { EditArticle } from './components/EditArticle'
import { ListArticle } from './components/ListArticle'
import { GlobalProvider } from './context/GlobalStates'

function App() {
  return (
    <GlobalProvider>
      <Container fluid>
        <Navbar expand="xl" variant="light" bg="light">
          <Navbar.Brand href="#">CRUD APP With Context</Navbar.Brand>
        </Navbar>
        <Container>
          <Switch>
            <Route path="/" exact component={ListArticle} />
            <Route path="/create" exact component={CreateArticle} />
            <Route path="/edit/:id" exact component={EditArticle} />
            <Route path="/detail/:id" exact component={DetailArticle} />
          </Switch>
        </Container>
      </Container>
    </GlobalProvider>
  );
}

export default App;
