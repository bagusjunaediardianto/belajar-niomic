import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import GridContent from './Grid/GridContent';
import {Container} from 'semantic-ui-react';

class App extends Component {
  render(){
  return (
      <>
      <br />
      <Container fluid>
        <GridContent />
      </Container>
      </>
  )
}
}

export default App;
