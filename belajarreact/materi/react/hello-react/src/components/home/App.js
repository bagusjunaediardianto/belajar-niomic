import React, { Component } from 'react';
import Header from './Header';
import Top from './Top';
import Main from './Main';
// import Form from './Form';
import CustomInput from './CustomInput';
// import Body from '../Body';
// import List from './List';
import Footer from './Footer';

class App extends Component {
  render(){
    return(
      <div>
        <Header list = "3 Terbaik"/>
        <Top />
        <CustomInput />
        {/* <Form /> */}
        <Main />
        {/* <Main
          [
            {
                nama : "Mie Ayam",
                harga : 10000
            },
            {
                nama : "Bakso",
                harga : 15000
            },
            {
                nama : "Mie Ayam Bakso",
                harga : "20000"
            },
            {
                nama : "Soto Ayam++",
                harga : 10000
            }
        ]
        /> */}
        {/* <Body /> */}
        {/* <List /> */}
        <Footer name="makanan nusantara" tahun="1990"/>
      </div>
    );
  }
}

export default App;
