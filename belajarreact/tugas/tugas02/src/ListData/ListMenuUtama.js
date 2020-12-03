import React, { Component } from 'react';


class ListMenuUtama extends Component {
    constructor(props){
        super(props);
        this.state = {
            linkgambar : this.props.linkgambar,
            lebar : this.props.lebar,
            tinggi : this.props.tinggi
        }
    }
    render(){
        const linkgambar = this.state.linkgambar;
        const lebar = this.state.lebar;
        const tinggi = this.state.tinggi;
        return (
            <div>
                <h1>
                    <center>Selamat Datang Di Warung Nusantara</center>
                </h1>
                <center>
                <img src={linkgambar} alt="Makanan Nusantara" width={lebar} height={tinggi} />
                </center>
            </div>
        )
    }
}

export default ListMenuUtama