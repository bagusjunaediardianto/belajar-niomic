import React, {Component} from 'react';

class ListMakanan extends Component {
    constructor(props){
        super(props);
        this.state = {
            datalist : this.props.linkgambar,
            lebar : this.props.lebar,
            tinggi : this.props.tinggi
        }
    }
    render(){
        return (
            <div>
                <img src={this.state.datalist} alt="Product Makanan" width={this.state.lebar} height={this.state.tinggi}/>
            </div>
        )
    }
}

export default ListMakanan