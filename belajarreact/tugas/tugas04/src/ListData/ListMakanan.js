import React, {Component} from 'react';


class ListMakanan extends Component {
    constructor(props){
        super(props);
        this.state = {
            datalist : this.props.gambar
        }
    }
    render(){
        return(
            <div>
                <img src={this.state.datalist} alt="produk Makanan" width="150" height="150"  />
            </div>
        )
    }
}

export default ListMakanan