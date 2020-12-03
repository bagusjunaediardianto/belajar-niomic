import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './Component/Posts';
import Pagination from './Component/Pagination';

const App =()=> {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)

  useEffect(()=>{
    const fetchPosts = async ()=> {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  },[])//[] berguna untuk sebagai dependency list

  //Get Current Post
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  
  //Change page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber)

  return (
    <div>
      <h1>Selamat Datang</h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postPerPages={postPerPage} totalPosts={posts.length+1} paginate={paginate}/>
    </div>
  );
}

export default App;
