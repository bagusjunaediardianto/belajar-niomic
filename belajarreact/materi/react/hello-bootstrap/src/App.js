import React, {Component} from 'react';
import {Container, 
        Button,Row, 
        Col, 
        Media, 
        Alert, 
        Badge, 
        Breadcrumb, 
        ButtonGroup, 
        ButtonToolbar,
        Card,
        Carousel,
        Dropdown,
        Form,
        InputGroup,
        Image,
        Figure,
        Jumbotron,
        ListGroup,
        Modal,
        Nav,
        Navbar,
        OverlayTrigger,
        Popover,
        Pagination,
        ProgressBar,
        Table,
        Tabs,
        Tab,
        Collapse
      } from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      buka : true
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(){
    return(
      this.setState = {
        buka : !this.state.buka
      }
    )
  }
  render(){
    const munculPopover = <Popover title="informasi">Selamat Kamu Berhasil</Popover>
    return (
      <div>
        <Container>
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Info</Nav.Link>
            </Nav.Item>
          </Nav>

          <Form inline>
            <Form.Control type="email" placeholder="masukkan email" className="mr-sm-2"/>
            <Form.Control type="password" placeholder="masukkan password" className="mr-sm-2"/>
            <Button variant="primary">Login</Button>
          </Form>
          </Navbar>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Info</Breadcrumb.Item>
          </Breadcrumb>
          <br/>
          <Tabs defaultActiveKey="info">
            <Tab eventKey="home" title="home">
              <p>Contoh Halaman Home</p>
            </Tab>
            <Tab eventKey="info" title="info">
              <p>Contoh halaman info</p>
            </Tab>
          </Tabs>
          <Carousel>
            <Carousel.Item>
              <center>
              <img 
                  className="d-block-w-100"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"
                  alt="First Slide"
                />
              </center>
              <br/>
              <Carousel.Caption>
                <p>Dapatkan promo Hotel Murah</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <center>  
              <img 
                className="d-block-w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
                alt="Second Slide"
              />
              </center>
              <br/>
              <Carousel.Caption>
                <p>Dapatkan promo Tiket Pesawat Murah</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <center>
              <img 
                className="d-block-w-100"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
                alt="Third Slide"
              />
              </center>
              <br/>
              <Carousel.Caption>
                <p>dapatkan tiket kereta api murah</p>
              </Carousel.Caption>
            </Carousel.Item>  
          </Carousel>
          <Jumbotron>
            <h1>Halo User</h1>
            <p>Selamat datang di situs makanan Nusantara</p>
            <Button variant="primary">Lebih Lengkap</Button>
          </Jumbotron>
          <Row>
            <Col>
              <Media>
                <img 
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                  alt="Generic Placeholder"
                />
                <Media.Body>
                <h5>Sate</h5>
                <p>Sate atau satai adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa 
                  dengan tusukan lidi tulang daun kelapa atau bambu kemudian dipanggang menggunakan bara arang kayu. 
                  Sate disajikan dengan berbagai macam bumbu yang bergantung pada variasi resep sate.
                </p>
                </Media.Body>
              </Media>
              </Col>
            <Col>
              <Media>
                <img 
                  width={64}
                  height={64}
                  className="mr-3"
                  src="https://cdn2.tstatic.net/bangka/foto/bank/images/sajian-soto-ayam-bening.jpg"
                  alt="Generic Placeholder"
                />
                <Media.Body>
                  <h5>Soto</h5>
                  <p>
                  Soto, sroto, sauto, tauto, atau coto adalah makanan khas Indonesia seperti sop yang terbuat dari kaldu daging dan sayuran. 
                  Daging yang paling sering digunakan adalah daging sapi dan ayam, 
                  tetapi ada pula yang menggunakan daging babi atau kambing.
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col>
            <Media>
              {/* {["primary","secondary","success","danger","warning","info","Light","dark"].map((item,index)=>(
                <Alert key={index} variant={item} className="mr-3" height={3} width={5}>
                  {item}
              </Alert>
              ))} */}
              <Alert variant="danger">
                    User yang anda masukkan salah
              </Alert>
            </Media>
            </Col>
            <Col>
              <h5>Pesannya adalah
              <Badge variant="secondary">
                Benar 
              </Badge>
              </h5>

              <Button variant="primary">
                Profile <Badge variant="light">9</Badge>
              </Button>
            </Col>
            <Col>
              <Button variant="info">
                Kirim
              </Button>
              <ButtonToolbar arial-label="Toolbars with button groups">
              <ButtonGroup className="mr-2" arial-label="First group">
                <Button variant="primary">1</Button>{' '}
                <Button variant="primary">2</Button>{' '}
                <Button variant="primary">3</Button>{' '}
                <Button variant="primary">4</Button>
              </ButtonGroup>
              <ButtonGroup className="mr-2" arial-label="Second group"> 
                <Button variant="primary">6</Button>
                <Button variant="primary">7</Button>
                <Button variant="primary">8</Button>
              </ButtonGroup>
              <ButtonGroup className="mr-2" arial-label="Third group">
                <Button variant="primary">9</Button>
              </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Card style={{width : "300px", height: "150px"}}>
                <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                <Card.Body>
                  <Card.Title>Sate</Card.Title>
                  <Card.Text>
                  Sate atau satai adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa 
                  dengan tusukan lidi tulang daun kelapa atau bambu kemudian dipanggang menggunakan bara arang kayu. 
                  Sate disajikan dengan berbagai macam bumbu yang bergantung pada variasi resep sate.
                  </Card.Text>
                  <Button variant="primary">Go Somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="primary">
                  Pilih Menu
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Sate</Dropdown.Item>
                  <Dropdown.Item href="/">Soto</Dropdown.Item>
                  <Dropdown.Item href="/">Nasi Padang</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <br/><br/>
              <Form>
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" placeholder="masukkan nama"></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="masukkan email"></Form.Control>
                  <Form.Text className="text-muted">
                    Kamu tidak akan menyalahgunakan email kamu
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="masukkan password"></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Check type="checkbox" label="kamu setuju mengikuti ketentuan yang berlaku"/>
                </Form.Group>
                <Button variant="primary" type="submit"> SUBMIT </Button>
              </Form>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control placeholder="username"></Form.Control>
                </InputGroup.Prepend>
              </InputGroup>
              <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg" roundedCircle/>
              <br/><br/>
              <Figure>
                <Figure.Image 
                  width={300}
                  height={100}
                  alt="gambar"
                  src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                />
                <Figure.Caption>
                  Nasi, Padang, makanan melegenda khas Indonesia
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item active>Nasi Padang</ListGroup.Item>
                <ListGroup.Item>Sate Madura</ListGroup.Item>
                <ListGroup.Item>Ayam geprek</ListGroup.Item>
                <ListGroup.Item>Bebek Panggang</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Simpan data Pelanggan</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary">Save Change</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Col>
            <Col>
              <OverlayTrigger trigger="click" placement="bottom" overlay={munculPopover}>
                <Button variant="success">Munculkan Overlay</Button>
              </OverlayTrigger>
              <br/><br/>
              <Pagination size="sm">
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Item active>4</Pagination.Item>
                <Pagination.Item>5</Pagination.Item>
              </Pagination>
              <br/>
              <ProgressBar now={75} label="75%"></ProgressBar>
            </Col>
          </Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Menu</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bagus</td>
                <td>Nasi Padang</td>
                <td>15.000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ardi</td>
                <td>Soto</td>
                <td>10.000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hasan</td>
                <td>Sate</td>
                <td>20.000</td>
              </tr>
            </tbody>
          </Table>

          <Button variant="primary" onClick={()=>this.setState({buka : !this.state.buka})}>Tampilkan</Button>
          <Collapse in={this.state.buka}>
          <p>Menampilkan pesan sesuai permintaan</p>
          </Collapse>
        </Container>
      </div>
    )
  }
  }
  

export default App;
