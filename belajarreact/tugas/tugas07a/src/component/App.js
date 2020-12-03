import React, {Component} from 'react';
import DataList from '../List/DataList';
import {
        Container,
        Row,
        Col,
        ButtonGroup,
        Badge,
        Button,
        Breadcrumb,
        Card
      } from 'react-bootstrap'

class App extends Component {
  render(){
  return (
    <Container>
      <Row>
        <Col>
        <Button variant="info">
          React Website Bootstrap
        </Button>
        </Col>
        <Col md="auto">
        <ButtonGroup arial-label="Basic example">
            <Button variant="primary">
              Notifications <Badge variant="light">9</Badge>
            </Button>{''}
            <Button variant="primary">
              Message <Badge variant="light">19</Badge>
            </Button>
          </ButtonGroup>
        </Col>
        <Col xs lg="2">
        <Button variant="light">
              <Badge>
                <img 
                    src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" 
                    alt="gambar orang"
                    width={20}
                    height={20}
                />
              </Badge> Andreas 
            </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{span : 4, offset:8}}>
          <Breadcrumb>
            <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/Berita">Berita</Breadcrumb.Item>
            <Breadcrumb.Item href="/Bola" active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
      {DataList.map((item,index)=> {
             return (
             <Col key={index}>
              <Card style={{width : "15rem", height : "100px"}}>
              <Card.Img variant="top" src={item.gambar}/>
                <Card.Title>{item.judul}</Card.Title>
              <Card.Body>
                <Card.Text>
                  {item.content}
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            </Col>
             ) 
          })}
      </Row>
    </Container>
  );
}
}

export default App;
