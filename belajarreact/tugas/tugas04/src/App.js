import React, {Component} from 'react';
import MenuMakanan from './Page/MenuMakanan';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      statusRendering : false
    }
    this.handleRender = this.handleRender.bind(this)
  }

  handleRender(value,e){
    this.setState((state,props) => {
      return {
        statusRendering : !state.statusRendering
      }
    })
  }
  
  render(){
    console.log(this.handleRender)
    return(
      <div>
        {this.state.statusRendering ? (
          <div>
            <h1>Selamat Datang</h1>
            <h2>Anda sedang dalam website Kami</h2>
            <MenuMakanan />
          </div>):(
            <div>
              <h1>Anda belum melakukan login</h1>
              <h2>Silahkan Login terlebih dahulu</h2>
            </div>
          )
        }
        <br/>
        <button type="button" onClick={this.handleRender}>To Our Website</button>
      </div>
    )
  }
}

export default App;
