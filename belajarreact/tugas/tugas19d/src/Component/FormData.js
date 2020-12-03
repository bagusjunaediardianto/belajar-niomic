import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import Axios from 'axios';

const FormData = ({
    datatable,
    defaultDataJabatan, 
    showDataJabatan, 
    defaultDataGender, 
    showDataGender, 
    reloaddata, 
    })=> {

    const [dataTable, setDataTable] = useState({...datatable})
    
    const onSubmitForm =()=>{
            Axios.post('http://localhost:3004/data-karyawan',dataTable)
            .then(()=>{
            const reloadData = reloaddata
            reloadData()
            
            let newDataTable = {...dataTable}
            newDataTable['id'] = 0
            newDataTable['nama_karyawan'] = ''
            newDataTable['jabatan'] = ''
            newDataTable['jenis_kelamin'] = ''
            newDataTable['tanggal_lahir'] = ''

            setDataTable(newDataTable)
        })
        }
    
    const inputChange =(e)=>{
        let newDataTable = ({...dataTable})
            newDataTable['id'] = new Date().getTime()
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
                            value={dataTable.nama_karyawan || ''}
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
                            value={dataTable.tanggal_lahir || ''}
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