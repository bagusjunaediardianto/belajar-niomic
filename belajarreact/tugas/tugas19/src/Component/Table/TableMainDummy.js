import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table, Pagination} from 'semantic-ui-react'
import TableHeader from './TableHeader';
import listData from '../Data/Structure';
const TableMainDummy = ()=> {
   const [posts,setPosts] = useState([])
   const [loading,setLoading] = useState(false)
   const [currentPage,setCurrentPage] = useState(1)
   const [postsPerPage,setPostPerPage] = useState(10)

   useEffect(()=>{
       const fetchPosts = async ()=> {
           setLoading(true)
           const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
           setPosts(res.data)
           setLoading(false)
       }
       fetchPosts()
   },[])
   console.log(posts);
   
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
        </>
    )
}

export default TableMainDummy