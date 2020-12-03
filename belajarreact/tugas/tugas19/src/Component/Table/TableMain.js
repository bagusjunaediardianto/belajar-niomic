import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table, Pagination} from 'semantic-ui-react'
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import listData from '../Data/Structure';
const TableMain = ()=> {
    const [useData, setData] = useState([])
    const [activePage,setActivePage] = useState(1)
    const [apiUrl] = useState('https://jsonplaceholder.typicode.com/comments')
    const limit = 25
    const dataLength = useData.length
    const setPagination = Math.ceil(dataLength / limit) 
    useEffect(()=>{
        axios.get(apiUrl)
        .then(res=> {
            setData(res.data)
        })
    },[apiUrl])

    const onChange = (e, pageInfo)=> {
        setActivePage(pageInfo.activePage)
    }

    return(
        <>
        <Table.Header>
            <Table.Row>
                {listData.tableStructure.tableHeader.map((item,index)=>(
                    <TableHeader 
                        key={index}
                        headerStruktur={item}
                    />
                ))}
            </Table.Row>
        </Table.Header>
        <Table.Body>
                {useData.map((item,index)=>(
                    <TableBody 
                        key={index}
                        postId={item.postId}
                        id={item.id}
                        name={item.name}
                        email={item.email}
                        body={item.body}
                    />
                ))}
        </Table.Body>
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan={listData.tableStructure.tableHeader.length-1}>
                    <Pagination floated="right"
                        key={setPagination}
                        activePage={activePage}
                        onPageChange={onChange}
                        totalPages={setPagination}
                        ellipsisItem={null}
                    />
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
        </>
    )
}

export default TableMain