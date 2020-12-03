import React, {Component} from 'react';
import CompCard from './Component/CompCard';
import CompTextInput from './Component/CompTextInput';
import CompCarousel from './Component/CompCarousel';
import {Button, Row, Col} from 'react-materialize';

class App extends Component {
  render(){
    return (
      <div>
        <CompCarousel />
        <Row>
          <Col m="5" s="10" style={{float:"left"}}>
          <CompCard />
          </Col>
          <Col m="5" s="10" style={{float:"right"}}>
            <CompCard />
          </Col>
        </Row>
          <CompTextInput />
        <Button>Sukses</Button>
      </div>
    )
  }
}

export default App;
