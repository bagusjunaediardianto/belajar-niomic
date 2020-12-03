import React, {Component} from 'react';


class MenuKontak extends Component {
    constructor(props){
        super(props)
        this.state = {
            alamat : "Jl Swadaya IV,Pd.Ranggon,Cipayung,Kota Jakarta Timur,Daerah Khusus Ibukota Jakarta 13860",
            noTelepon : "0895411931227"
        }
    }
    render(){
        return (
            <div>
                <center>
                <h4>{this.state.alamat}</h4>
                <h4>Kontak Kami : {this.state.noTelepon}</h4>
                </center>
            </div>
        )
    }
}

export default MenuKontak