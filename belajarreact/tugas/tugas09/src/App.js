import React, {Component} from 'react';
import Navigationbar from './component/Navigationbar';
import Breadcrumbs from './component/Breadcrumbs';
import TabsNav from './component/TabsNav';
import { Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  render(){
  return (
    <div>
      <Navigationbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={{span : 4, offset:7}}>
            <Breadcrumbs />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <TabsNav />
        </Row>
      </Container>
    </div>
  )
  }
}

export default App;
