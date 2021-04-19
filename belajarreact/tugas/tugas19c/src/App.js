import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../src/style.css';
import 'semantic-ui-css/semantic.min.css'
import TableData from './Component/TableData';
import Pagination from './Component/Pagination';

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await Axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchData()
  }, []) //berguna untuk dependency list

  //mendapatkan post saat ini
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  //change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <h1>Selamat Datang</h1>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length + 1}
        paginate={paginate} />
      <TableData
        posts={currentPosts}
        loading={loading}
      />
    </div>
  );
}

export default App;
