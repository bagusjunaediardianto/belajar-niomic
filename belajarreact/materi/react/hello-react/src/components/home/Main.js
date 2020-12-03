import React, {Component} from 'react';
import menuMakanan from './lib/Food';
// const menuMakanan = [
//     {
//         nama : "Mie Ayam Pedas Bingit",
//         harga : 10000
//     },
//     {
//         nama : "Bakso",
//         harga : 15000
//     },
//     {
//         nama : "Mie Ayam Bakso",
//         harga : "20000"
//     },
//     {
//         nama : "Soto Ayam++",
//         harga : 10000
//     }
// ]

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : "Menu Makanan",
            title2 : "Menu Minuman",
            statusRendering : true,
            inputValue : "",
            inputKota : "",
            // menuMakanan : [
            //     {
            //         nama : "Mie Ayam",
            //         harga : 10000
            //     },
            //     {
            //         nama : "Bakso",
            //         harga : 15000
            //     },
            //     {
            //         nama : "Mie Ayam Bakso",
            //         harga : "20000"
            //     },
            //     {
            //         nama : "Soto",
            //         harga : 10000
            //     }
            // ]
        }
        this.rubahData2 = this.rubahData2.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleElement = this.handleElement.bind(this)
    }
    // cara merubah data di state bisa dilakukan dengan 2 cara

    // 1.cara pertama
        // rubahData(){
    //     this.setState({title : "Pilih Makanan"})
    // }

    // 2.cara kedua
    rubahData2(){
        this.setState((state,props) => {
            return {
                title : "Pilih Makanan",
                title2 : "Pilih Minuman"}
        })
    }

    handleChange(value,e) {
        // this.setState({[value]:e.target.value})
        const eventTarget = e.target.value
        this.setState((state,props)=> {
            return {
                [value] : eventTarget
            }
        })
    }

    componentDidMount(){
        console.log("Jalan : componentDidMount")
        
    }

    handleElement(){
        this.setState((state,props)=> {
            return {
                statusRendering : !state.statusRendering
            }
        })
    }

    render(){
        console.log("Jalan : Render")
        console.log(this.state.statusRendering)
        
        // return (
        //     <div>
        //         {this.state.statusRendering ? 
        //         (<div>
        //             <h1>Selamat datang</h1>
        //             <h2>Silahkan Pilih Makanan</h2>
        //         </div>):
        //         (<div>
        //             <h1>Selamat Tinggal</h1>
        //             <h2>Jangan Lupa datang Kembali</h2>
        //         </div>
        //         )}
        //         <button onClick={this.handleElement}>Change</button>
        //     </div>
        // )
        
        
        
        
        
        
        
        
        
        
        
        return(
            <div>
                <h3 style={
                    {
                        color:"blue",
                        backgroundColor:"black",
                        marginTop : "100px"}
                    }>
                {this.state.title}</h3>
                <h2>{this.state.title2}</h2>
                {/* <button onClick={this.rubahData}>Rubah data</button> */}
                <button onClick={this.rubahData2}>Rubah data</button>

                <br/>
                <br/>
                <input type="text" value={this.state.inputValue} onChange={(e)=>this.handleChange("inputValue",e)} placeholder="nama"/>
                <input type="text" value={this.state.inputKota} onChange={(e)=>this.handleChange("inputKota",e)} placeholder="kota"/>
                
                {menuMakanan.map((item,index,array)=> {
                    return (
                        <div key={index}>
                            <p>No : {index+1}</p>
                            <p>Nama Makanan : {item.nama}</p>
                            <p>Harga {item.harga}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    }

export default Main