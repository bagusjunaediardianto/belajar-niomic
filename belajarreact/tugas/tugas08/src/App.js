import React, {Component} from 'react';
import ModalNotif from './ModalNotif';
import './Custom.css';
import {Container,
        Row,
        Col,
        Navbar,
        Dropdown,
        Button,
        Badge,
        Image,
        Carousel,
        Breadcrumb,
        ListGroup,
        Jumbotron} from 'react-bootstrap';
// import ModalNotification from './ModalNotification';

class App extends Component{
  render(){
  return (
      <div>
      <Navbar bg="dark" fluid>
        <Row style={{width:"100%"}}>
          <Col>
            <Dropdown size="sm">
              <Dropdown.Toggle variant="primary" size="sm">
                Pilih Bahasa
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Bahasa Indonesia</Dropdown.Item>
                <Dropdown.Item>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md="auto"></Col>
          <Col xs lg="2">
            <Button variant="dark">
              <Badge>
              <Image 
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                alt="logo user"
                height={20}
                width={20}
              />
              <br/>
              Alan Saputra
          </Badge>
        </Button>
          </Col>
        </Row>
      </Navbar>
      <Container fluid>
        <Row>
          <Col md={{span:6, offset:8}}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
              <Breadcrumb.Item href="#" active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
          <Carousel>
            <Carousel.Item>
              <center>
                <Image 
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="gambar bola"
                  height={400}
                />
              </center>
              <Carousel.Caption>
                <h5 style={{color:"white"}}>Neymar Kembali Menemukan Jati dirinya</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <center>
              <Image 
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                alt="gambar bola"
                height={400}
              />
              </center>
              <Carousel.Caption>
                <h5 style={{color:"white"}}>Timnas Inggris Kembali Meraih Kemenangan</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <center>
              <Image 
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="gambar bola"
                height={400}
              />
              </center>
              <Carousel.Caption>
              <h5 style={{color:"white"}}>Sani Rizky Optimis Timnas Indonesia bisa Go Internasional</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes LIga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={6}>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </Col>
          <Col>
            <ModalNotif/>
          </Col>
        </Row>
      </Container>
      </div>
  );
  }
}

export default App;
