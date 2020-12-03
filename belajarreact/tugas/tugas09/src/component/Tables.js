import React from 'react';
import dataTable from './dataTable';
import {Table, ProgressBar} from 'react-bootstrap'

const Tables = ()=> {
    return(
        <div>
           <Table stripped responsive size="lg" style={{fontSize:12}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                    </tr>
                </thead>
                <tbody>
                        {dataTable.map((item, index)=> {
                            return(
                            <tr>
                            <td key={index}>{index+1}</td>
                            <td>{item.namaPemain}</td>
                            <td>{item.tim}</td>
                            <td>{item.transfer}</td>
                            <td>
                               <ProgressBar animated now={item.prosesTransfer} label={item.prosesTransfer+" %"}></ProgressBar>
                            </td>
                            </tr>
                            )
                        })}
                </tbody>
            </Table> 
        </div>
    )
}

export default Tables