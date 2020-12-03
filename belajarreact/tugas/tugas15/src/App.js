import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container} from 'semantic-ui-react';
import TableContent from './Table/TableContent';
import GridContent from './Grid/GridContent';

class App extends Component {
  render(){
  return (
    <>
    <br />
    <Container>
      <TableContent />
      <GridContent />
    </Container>
    </>
  );
}
}
export default App;
