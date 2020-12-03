import React, { Component } from 'react';
import {MenuUtama} from './Page/MenuUtama';
import MenuProduk from './Page/MenuProduk';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami'

const Header = ()=> {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  )
}

const Footer = ()=> {
  var tahun = 2018
  return (
    <div>
<h1>Ini Halaman Untuk Footer {tahun}</h1>
    </div>
  )
}

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <MenuUtama />
        <MenuProduk />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    )
  }
}

export default App;
