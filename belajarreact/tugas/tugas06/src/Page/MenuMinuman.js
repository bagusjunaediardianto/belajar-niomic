import React, {Component} from 'react';
import DaftarMinuman from '../Lib/DaftarMinuman';
import Header from '../Page/Header';

class MenuMinuman extends Component {
    render(){
        return(
            <div>
                <Header />
                <h3>Daftar Minuman Favorite</h3>
                <table style={{width : "100%"}}>
                    <tbody>
                        <tr>
                            {DaftarMinuman.map((item, index)=> {
                                return(
                                    <td key={index}>
                                        <center>
                                            <img 
                                                src={item.gambar}
                                                alt="Produk Minuman"
                                                width="150"
                                                height="100"
                                            />
                                            <p>{item.NamaMinuman}</p>
                                            <p>Harga Rp. {item.Harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MenuMinuman;