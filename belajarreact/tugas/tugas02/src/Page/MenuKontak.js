import React from 'react';

export class MenuKontak extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            alamat : "Jl. Swadaya IV,Pd.Ranggon,Cipayung,Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
            kontak : "0895411931227"
        }
    }
    
    render(){
        return (
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami : {this.state.kontak}</h4>
                </center>
            </div>
        )
    }
}