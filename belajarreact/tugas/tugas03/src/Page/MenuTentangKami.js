import React,{Component} from 'react';

class MenuTentangKami extends Component {
    constructor(props){
        super(props);
        this.state = {
            header : "Tentang Kami",
            content : "Warung Nusantara Adalah Restoran Yang bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"
        }
    }
    
    render(){
        return(
            <div>
                <center>
                    <p>{this.state.header}</p>
                    <p>{this.state.content}</p>
                </center>
            </div>
        )
    }
}

export default MenuTentangKami