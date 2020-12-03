import React, {Component} from 'react';

class Image extends Component {
    render(){
        return (
            <div>
                <img 
                    src={this.props.linkgambar} 
                    alt="gambar.jpg" 
                    width="150"
                    height = "150"
                />
            </div>
        )
    }
}

export default Image