import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiStatus : '',
      apiInfo : [],
      dataPost : {
        id  :0,
        title : '',
        body: ''
      }
    }
    // this.handleRemove = this.handleRemove.bind(this)
    // this.inputChange = this.inputChange.bind(this)
    // this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  reloadData(){
    axios.get('http://localhost:3004/posts')
    .then(res => {
      this.setState({
        apiStatus : res.status,
        apiInfo : res.data
      })
      // console.log(res.status);
      
    })
  }

  inputChange=(e)=>{
    let newDataPost = {...this.state.dataPost}
    newDataPost['id'] = new Date().getTime()
    newDataPost[e.target.name] = e.target.value

    this.setState({
      dataPost : newDataPost
    },()=>console.log(this.state.dataPost))
  }

  handleRemove=(e)=>{
    console.log(e.target.value)
    fetch(`http://localhost:3004/posts/${e.target.value}`,{method : "DELETE"})
    .then(res => this.reloadData()
    )
    // .then(response => response.json())
    // .then(res => {
    //   this.setState = {
    //     apiInfo : ''
    //   }
    // })
  }

  onSubmitForm=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3004/posts',this.state.dataPost)
    .then(()=>{this.reloadData()})
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(res => {
    //   this.setState({
    //     apiInfo : res
    //   })
    //   }
    // )
    this.reloadData()
  }
  
  render(){
  return (
    <div>
      <h1>Selamat datang</h1>
      <input type="text" name="title" placeholder="masukkan title" onChange={this.inputChange}/>
      <br /><br />

      <input type="text" name="body" placeholder="masukkan body" onChange={this.inputChange}/>
      <br /><br />
      <button type="submit" onClick={this.onSubmitForm}>Add Data</button>
      {this.state.apiStatus===200 ?(
        <div>
          <p>Koneksi Berhasil</p>
            {this.state.apiInfo.map((item,index)=>(
            <div key={index}>
              <p>({item.id}.)</p>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <button value={item.id} onClick={this.handleRemove}>Delete</button>
            </div>
      ))}
        </div>
      ):(
        <div>
          <p>Koneksi Gagal</p>
        </div>
      )}
    </div>
  )
}
}

export default App;
