import React, {Component} from 'react';
import ListMenuUtama from '../ListData/ListMenuUtama';

class MenuUtama extends Component {
    render(){
        return (
            <div>
                <ListMenuUtama linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="600" tinggi="500"/>
            </div>
        )
    }
}

export default MenuUtama