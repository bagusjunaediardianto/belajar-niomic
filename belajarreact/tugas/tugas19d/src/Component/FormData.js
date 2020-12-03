import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import Axios from 'axios';

const FormData = ({defaultDataJabatan, showDataJabatan, defaultDataGender, showDataGender, reloaddata, setEditFalse})=> {
    const [dataTable, setDataTable] = useState({
        id : 0,
        nama_karyawan : '',
        jabatan       : '',
        jenis_kelamin : '',
        tanggal_lahir : ''

    })

    const onSubmitForm =()=>{
        if(setEditFalse === false){
            Axios.post('http://localhost:3004/data-karyawan',dataTable)
            .then(()=>{
            const reloadData = reloaddata
            reloadData()
            
            let newDataTable = {...dataTable}
            newDataTable['id'] = ''
            newDataTable['nama_karyawan'] = ''
            newDataTable['jabatan'] = ''
            newDataTable['jenis_kelamin'] = ''
            newDataTable['tanggal_lahir'] = ''

            setDataTable(newDataTable)
        })
        }else {
            Axios.put(`http://localhost:3004/data-karyawan/${dataTable.id}`,dataTable)
            .then(()=>{
                const reloadData = reloaddata
                reloadData()
            })
        }
        
    }
    
    const inputChange =(e)=>{
        let newDataTable = {...dataTable}
        if(setEditFalse === false){
            newDataTable['id'] = new Date().getTime()
        }
        newDataTable[e.target.name] = e.target.value

        setDataTable(newDataTable)
        console.log(dataTable)
    }

    
    return(
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control 
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        value={dataTable.nama_karyawan}
                        name="nama_karyawan"
                        onChange={inputChange}
                        placeholder="Nama anda" 
                    />
                </Col>
                <Col>
                    <Form.Control 
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        as="select"
                        defaultValue={defaultDataJabatan}
                        name="jabatan"
                        onChange={inputChange}
                    >
                        {showDataJabatan.map(item=>(
                            <option key={item}>
                                {item}
                            </option>
                        ))}
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control 
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        as="select"
                        defaultValue={defaultDataGender}
                        name="jenis_kelamin"
                        onChange={inputChange}
                    >
                        {showDataGender.map(item=>(
                            <option key={item}>
                                {item}
                            </option>
                        ))}
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control 
                        type="date"
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        value={dataTable.tanggal_lahir}
                        name="tanggal_lahir"
                        onChange={inputChange}
                        placeholder="Tanggal Lahir" 
                    />
                </Col>
                <Col>
                    <Button type="submit" className="mb-2" onClick={()=>onSubmitForm()}>Simpan</Button>
                </Col>
            </Form.Row>
        </Form>
        
    )
}

export default FormData