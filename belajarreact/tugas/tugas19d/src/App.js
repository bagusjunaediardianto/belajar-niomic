import React, {Component} from 'react';
import axios from 'axios';
import TableData from './Component/TableData';
import FormData from './Component/FormData';
import PaginationPage from './Component/PaginationPage';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading : false,
      currentPage : 1,
      postPerPage : 5,
      apiStatus : '',
      apiData   : [],
      dataTable : {
        id : 0,
        nama_karyawan : '',
        jabatan       : '',
        jenis_kelamin : '',
        tanggal_lahir : ''
      },
      show      : false,
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

  setPagination =(data)=>{
    this.setState({
      currentPage : data
    })
  } 

  componentDidMount(){
    
    this.reloadData()
  }

  render(){
    //get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage
    const currentPosts = this.state.apiData.slice(indexOfFirstPost, indexOfLastPost)

    //changePage 
    const paginate =(pageNumber)=> this.setPagination(pageNumber)
    //dataset
    const dataTable = this.state.dataTable
    const tableHeader = this.state.tableHeader
    const listJabatan = this.state.dataJabatan
    const listGender = this.state.dataGender
    const setEditFalse = this.state.edit
    
    return (
    <Container>
        <h1 className="text-danger">Data Karyawan CV Tiga Bintang Perkasa</h1>
          <FormData 
            datatable={dataTable}
            defaultDataJabatan={listJabatan[0]}
            showDataJabatan={listJabatan}
            defaultDataGender={listGender[0]}
            showDataGender={listGender}
            reloaddata={this.reloadData}
          />
          <TableData 
            datatable={dataTable}
            tableHeader={tableHeader} 
            Posts={currentPosts}
            showDataJabatan={listJabatan}
            showDataGender={listGender} 
            loading={this.state.loading}
            reloaddata={this.reloadData}
            seteditFalse={setEditFalse}
            showDef={this.state.show}
          />
        <Row>
          <Col md={{span : 4, offset : 8}}>
            <PaginationPage
              postPerPage={this.state.postPerPage}
              totalPosts={this.state.apiData.length+1}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>      
  )
  } 
}
export default App;
