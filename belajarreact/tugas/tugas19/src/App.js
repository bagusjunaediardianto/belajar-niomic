import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Header, Segment, Icon} from 'semantic-ui-react';
import ComponentMain from './Component/ComponentMain';
import TableMainDummy from './Component/Table/TableMainDummy';

class App extends Component {
  render(){
  return (
    <>
    <Container>
    <Segment stacked style={{marginTop:"3em"}}>
      <Header as="h2" size="large">
        <Icon size="small" loading name="spinner" />
        <Header.Content>CRUD MANIPULATION WITH EDITABLE</Header.Content>
       </Header>
       <TableMainDummy />
    </Segment>  
      <ComponentMain />
    </Container>
    </> 
  );
}
}

export default App;
