import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiStatus : '',
      apiData   : [],
      edit      : false,
      dataPost  : {
        id    : 0,
        title : '',
        body  : ''
      }
    }
  }

  inputChange =(e)=>{
    let newDataPost = {...this.state.dataPost}
    if(this.state.edit === false){
      newDataPost['id'] = new Date().getTime()
    } 
    newDataPost[e.target.name] = e.target.value

    this.setState({
      dataPost  : newDataPost
    },console.log(this.state.dataPost)
    
    )
  }

  handleRemove =(e)=>{
    console.log(e.target.value)
    fetch(`http://localhost:3004/posts/${e.target.value}`,{method:"DELETE"})
    .then(()=> this.reloadData())
  }

  onSubmitForm =()=>{
    if(this.state.edit===false){
      axios.post('http://localhost:3004/posts',this.state.dataPost)
      .then(()=>{
        this.reloadData()
        this.clearData()

        let newdataPost = {...this.state.dataPost};
        newdataPost["id"] = ''
        newdataPost["title"] = ''
        newdataPost["body"] = ''

        this.setState({
          dataPost : newdataPost
        })
      })
    } else {
      axios.put(`http://localhost:3004/posts/${this.state.dataPost.id}`,this.state.dataPost)
      .then(()=>
        this.reloadData(),
        this.clearData())
    }
    
    
  }

  getDataId =(e)=> {
    axios.get(`http://localhost:3004/posts/${e.target.value}`)
    .then(res => {
      this.setState({
        dataPost : res.data,
        edit     : !this.state.edit
      })
    }
    )
  }

  clearData = ()=> {

  }
  
  reloadData =()=>{
    axios.get('http://localhost:3004/posts')
    .then( res=> {
      this.setState({
        apiStatus : res.status,
        apiData   : res.data,
        edit      : false
      })
    })
  }

  componentDidMount(){
    this.reloadData()
  }
  render(){
  return (
    <div>
      <h1>Selamat Datang</h1>
      <input 
        type="text" 
        name="title" 
        value={this.state.dataPost.title}
        placeholder="masukkan title" 
        onChange={this.inputChange}
      /><br/><br/>
      
      <input 
        type="text" 
        name="body" 
        value={this.state.dataPost.body}
        placeholder="masukkan body" 
        onChange={this.inputChange}
      /><br/><br/>
      <button type="submit" onClick={()=>this.onSubmitForm()}>Submit</button>
      {this.state.apiStatus===200 ?(
        <div>
          <p>Koneksi Berhasil</p>
          {this.state.apiData.map((item,index)=>(
          <div key={index}>
            <h3>({item.id})</h3>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            <button value={item.id} onClick={this.handleRemove}>Delete</button>
            <button value={item.id} onClick={this.getDataId}>Edit</button>
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
