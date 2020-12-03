import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan'

class MenuMakanan extends Component {
    constructor(props){
        super(props)
        this.state = {
            nilai : 0,
            pesan : "Menu Makanan Nusantara"
        }
        this.rubahData = this.rubahData.bind(this)
        this.pesanan = this.pesanan.bind(this)
        // this.perulangan = this.perulangan.bind(this)
    }

    rubahData(){
        this.setState((state,props)=> {
            return {
                pesan : "Nasi Padang"   
            }
        })
    }

    pesanan(e){
        console.log(e.target.value)
        
    }
    render(){
        return (
            <div>
                <h3>Daftar Makanan yang kami sediakan</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="150" tinggi="150"/>
                                <center>
                                    <button onClick={this.rubahData}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="150" tinggi="150"/>
                                <center>
                                    <button onClick={this.rubahData}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan datalist="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="150" tinggi="150"/>
                                <center>
                                    <button onClick={this.rubahData}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan datalist="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" lebar="150" tinggi="150"/>
                                <center>
                                    <button onClick={this.rubahData}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan datalist="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" lebar="150" tinggi="150"/>
                                <center>
                                    <button onClick={this.rubahData}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="text"
                onChange={this.pesanan} placeholder={this.state.pesan}/>
                <h3>Pesanan Anda : {this.state.nilai}</h3>
            </div>
        )
    }
}

export default MenuMakanan