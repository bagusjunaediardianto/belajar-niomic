import React, {Component} from 'react'
import FormMakanan from '../Form/FormMakanan';
import DaftarMakanan from '../Lib/DaftarMakanan'

const ListMakanan = [
    {
        NamaMakanan : "Nasi Padang",
        Harga : "20.000",
    },
    {
        NamaMakanan : "Sate",
        Harga : "20.000",
    },
    {
        NamaMakanan : "Soto",
        Harga : "10.000",
    },
    {
        NamaMakanan : "Nasi Uduk",
        Harga : "10.000",
    },
    {
        NamaMakanan : "Nasi Kuning",
        Harga : "15.000",
    },
    {
        NamaMakanan : "Ayam Geprek",
        Harga : "15.000",
    },
    {
        NamaMakanan : "Pecel",
        Harga : "10.000",
    },
    {
        NamaMakanan : "Mie Ayam",
        Harga : "10.000",
    },
]

class MenuMakanan extends Component {
    render(){
        return(
            <div>
                <h3>Daftar Makanan favorit</h3>
                <table>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((item,index)=> {
                                return (
                                    <td key={index}>
                                        <img 
                                            src={item.img}
                                            alt="Produk Makanan"
                                            width="150"
                                            height="100" />
                                        <center>
                                            <p>{item.NamaMakanan}</p>
                                            <p>Harga : Rp {item.Harga}</p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
                <h4>List Makanan</h4>
                {ListMakanan.map(function(item, index){
                    return(
                        <div key={index}>
                            <p>
                                {item.NamaMakanan} | Harga Rp. {item.Harga}
                            </p>
                        </div>
                    )
                })}
                <FormMakanan />
            </div>
        )
    }
}

export default MenuMakanan