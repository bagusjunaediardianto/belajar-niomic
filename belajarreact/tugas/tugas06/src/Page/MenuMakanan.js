import React, {Component} from 'react';
import DaftarMakanan from '../Lib/DaftarMakanan';
import Header from '../Page/Header';


class MenuMakanan extends Component {
    render(){
        return(
            <div>
                <Header />
                <h3>Daftar Makanan Favorite</h3>
                <table style={{width : "100%"}}>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((item, index)=> {
                                return(
                                    <td key={index}>
                                        <center>
                                            <img 
                                                src={item.gambar}
                                                alt="Produk Makanan"
                                                width="150"
                                                height="100"
                                            />
                                            <p>{item.NamaMakanan}</p>
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

export default MenuMakanan