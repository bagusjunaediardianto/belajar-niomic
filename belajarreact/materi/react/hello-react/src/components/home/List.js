import React, {Component} from 'react'
import Image from './Image';    

class List extends Component {
    render(){
        return (
            <div>
                <ol>
                    <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="500" tinggi="300"/>
                    <li>Nasi Padang</li>
                    <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="400" tinggi="200"/>
                    <li>Sate</li>
                    <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" lebar="300" tinggi="150"/>
                    <li>Soto Lamongan</li>
                    <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" lebar="200" tinggi="100"/>
                </ol>
            </div>
        )
    }
}

export default List