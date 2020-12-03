import React, {Component} from 'react';
import axios from 'axios';
import TableData from './Component/TableData';
import FormData from './Component/FormData';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading : false,
      apiStatus : '',
      apiData   : [],
      edit      : false,
      tableHeader : ['ID',"NAMA","JABATAN","GENDER","TANGGAL LAHIR","ACTION"],
      dataJabatan  : ["--Pilih Jabatan--","Marketing","Sekretaris","Security","Support"], 
      dataGender   : ["--pilih gender--","Laki-Laki","Perempuan"]
    }   
  }

  reloadData=()=> {
    const fetchData = async ()=> {
      this.setState({loading : true})
      const res = await axios.get('http://localhost:3004/data-karyawan')
      this.setState({  
        apiData : res.data,
        edit    : false
      })
      this.setState({loading : false})
    }
    fetchData()
  }

  componentDidMount(){
    
    this.reloadData()
  }

  render(){
    
    const tableHeader = this.state.tableHeader
    const listJabatan = this.state.dataJabatan
    const listGender = this.state.dataGender
    const setEditFalse = this.state.edit
    return (
  <div className="App container">
    <h1 className="text-danger">Data Karyawan CV Tiga Bintang Perkasa</h1>
    <FormData 
      defaultDataJabatan={listJabatan[0]}
      showDataJabatan={listJabatan}
      defaultDataGender={listGender[0]}
      showDataGender={listGender}
      reloaddata={this.reloadData}
      setEditFalse={setEditFalse}
    />    
    <TableData 
      tableHeader={tableHeader} 
      Posts={this.state.apiData} 
      loading={this.state.loading}
      reloaddata={this.reloadData}  
    />    
  </div>  
  )
  } 
}
export default App;
