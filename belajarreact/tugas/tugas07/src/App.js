import React, {Component} from 'react';
import {Container,Row,Col, Media, Alert, Button, Badge, Breadcrumb, ButtonGroup, Card} from 'react-bootstrap';

class App extends Component{
  render(){
    return (
        <Container>
          <Row>
            <Col>
              <Media>
                <Alert variant="primary">
                  Website React Bootstrap
                </Alert>
              </Media>
            </Col>
            <Col md="auto">
              <ButtonGroup arial-label="Basic example">
                <Button variant="primary">
                    Notifications <Badge variant="light">9</Badge>
                </Button>{" "}
                <Button variant="primary">
                    Message <Badge variant="light">19</Badge>
                </Button>
              </ButtonGroup>
            </Col>
            <Col xs lg="2">
              <Button variant="light">
                <Badge>
                  <img 
                    height={20}
                    width={20}
                    src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                    alt="gambar anak"
                  />{" "}
                  Andreas
                </Badge>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={{span : 5, offset: 8}}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>{' '}</Col>
            <Col>
            <Card Style={{width:"100px",height:"50px"}}>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"/>
              <Card.Body>
                <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
                <Card.Text>
                Selama berkarier di tim nasional, bek milik Atletico Madrid itu telah mencetak delapan gol</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card Style={{width:"100px",height:"50px"}}>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"/>
              <Card.Body>
                <Card.Title>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</Card.Title>
                <Card.Text>
                  Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis.  
                </Card.Text>
                <Button variant="primary">Read More</Button>      
              </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card Style={{width:"100px",height:"50px"}}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"/>
                <Card.Body>
                  <Card.Title>England celebrate 1,000th game with seven-goal charge into Euro 2020 finals</Card.Title>
                  <Card.Text>
                  It was a night when England celebrated their football history and threatened to run up a historic scoreline.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card Style={{width:"100px", height:"50px"}}>
                <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"/>
                <Card.Body>
                  <Card.Title>Mengenal Sani Rizki Fauzi, Pesepakbola Asal Cicurug Sukabumi di Timnas U-22</Card.Title>
                  <Card.Text>
                  Menjadi bagian dari Timnas merupakan sebuah kebanggan bagi pesepakbola manapun.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default App;
