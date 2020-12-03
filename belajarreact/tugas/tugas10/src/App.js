import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Container,Divider, Label, Grid} from 'semantic-ui-react';

class App extends Component {
  render(){
  return (
    <div>
        <Container textAlign="center" fluid>
          <Divider horizontal>Selamat Datang !!!!</Divider>
          <br/><br/>
        </Container>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column  width={3}/>
            <Grid.Column width={10}>
              <Container textAlign="center">
                <Container textAlign="right">
                  <Label as="a" color="teal" tag>
                    Sport
                  </Label>
                </Container>
                <br/><br/>
                Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)?
                Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.
                Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. 
                Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan.
              </Container>
            </Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row>
        </Grid>

    </div>
  )
  }
}

export default App;
