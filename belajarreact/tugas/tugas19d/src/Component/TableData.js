import React, { useState } from 'react'
import { Table, Button, Spinner, Modal} from 'react-bootstrap';
import Axios from 'axios';
import ModalForm from './ModalForm';

    const TableData = (
        {
            datatable,tableHeader, 
            Posts, loading, reloaddata, 
            seteditFalse, showDef, 
            showDataJabatan, showDataGender,
        })=> {
        const [dataPosts, setDataPosts] = useState({...datatable})
        const [getShow, editShow] = useState(showDef)
        
        const handleShow = ()=> editShow(!showDef)
        const handleClose = ()=> editShow(showDef)

        const reloadData = reloaddata

        const inputChange =(e)=> {
            if(!seteditFalse === true){
                let newDataPosts = {...dataPosts}
                newDataPosts[e.target.name] = e.target.value
                setDataPosts(newDataPosts)
                console.log(dataPosts)
            }
                
        }

        const handleRemove =(e)=>{
            e.preventDefault()
            console.log(e.target.value)
            fetch(`http://localhost:3004/data-karyawan/${e.target.value}`,{method:"DELETE"})
            .then(()=>{
                reloadData()
            })
            
        }

        const getDataId = (e)=> {
            
            Axios.get(`http://localhost:3004/data-karyawan/${e.target.value}`)
            .then(res=> {
                const editTrue =()=> !seteditFalse
                setDataPosts(res.data)
                editTrue()
                handleShow()
            })
        }

        const onSubmitForm = (e)=> {
            e.preventDefault() 
            Axios.put(`http://localhost:3004/data-karyawan/${dataPosts.id}`,dataPosts)  
                .then(()=> {
                    reloadData();
                })   
                handleClose()
        }


        if (!loading) { 
            return(
            <div>  
                <Table striped bordered hover variant="dark" responsive>
                    <thead>
                        <tr>
                            {tableHeader.map(item=>(
                                <th align="center" key={item}>
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {Posts.map((item,index)=>(
                        <tr key={index}>
                            <td align="center">{item.id}</td>
                            <td align="center">{item.nama_karyawan}</td>
                            <td align="center">{item.jabatan}</td>
                            <td align="center">{item.jenis_kelamin}</td>
                            <td align="center">{item.tanggal_lahir}</td>
                            <td style={{display:"inline-flex"}} align="center">
                                {' '}<Button variant="primary" value={item.id} onClick={getDataId}>Edit</Button>
                                    {item.id && !seteditFalse === true ? (
                                        <ModalForm 
                                            getShow={getShow}
                                            handleClose={handleClose}
                                            seteditFalseAnimation={seteditFalse}
                                            dataPosts={dataPosts}
                                            showDataJabatan={showDataJabatan}
                                            showDataGender={showDataGender}
                                            inputChange={inputChange}
                                            onSubmitForm={(e)=>onSubmitForm(e)}
                                        />
                                    ):(
                                        <Modal>
                                            <Modal.Header>
                                                <Modal.Title>Pesan</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p>Tidak ada data ditampilkan</p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" onClick={handleClose}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    )}
                                    {' '}<Button variant = "danger" value={item.id} onClick={handleRemove}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                        </div>
                    )}
            return(
                <div>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
                </div>
            )
        }
    export default TableData