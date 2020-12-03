import React, {Component} from 'react';
import "./Header.css"
const Judul = {
  color : "orange",
  backgroundColor : "blue",
  marginTop : "100px"
}

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      daftar : "Daftar Makanan Nusantara",
      dataList : this.props.list
    }
    // wajib di bind atau di definisikan di constructor, agar semua state bisa di return
    this.handlePesan = this.handlePesan.bind(this)
  }
  
  handlePesan(value,e){
    // alert(this.state.daftar)
    e.preventDefault()
    alert(this.state.daftar)
    alert(value)
  }

    render(){

      var daftar = this.state.daftar
      var dataList = this.state.dataList
      return(
        <div>
          <h2 style={Judul}>Makanan Khas Indonesia</h2>
          <p id="paragrafSatu">{daftar}</p>
          <p className="paragrafDua">{dataList}</p>
          <a href="/" onClick={(e)=>this.handlePesan("Pesan Dari Header",e)}>Halaman Header</a>
        </div>
      )
    }
  }

  export default Header