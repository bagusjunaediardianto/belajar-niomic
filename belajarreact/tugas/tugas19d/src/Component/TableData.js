import React from 'react'
import { Table, Button, Spinner} from 'react-bootstrap';

const TableData = ({tableHeader, Posts, loading, reloaddata})=> {
    const reloadData = reloaddata

    const handleRemove =(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        fetch(`http://localhost:3004/data-karyawan/${e.target.value}`,{method:"DELETE"})
        .then(()=>{
            reloadData()
        })
        
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
                        <td align="center">
                            <Button variant="info" value={item.id}>Edit</Button>{' '}
                            <Button variant = "danger" value={item.id} onClick={handleRemove}>Delete</Button>
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