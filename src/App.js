import { Component } from 'react';
import './App.css';
import TextDisplay from './components/TextDisplay'
class App extends Component{
  constructor(){
    super();
    this.state = {
      FirstName: "",
      LastName: ""
    }
  }
  ChangeField = (key, e) =>{
    e.preventDefault();
    
    this.setState({
      [key]: e.target.value
    })
  }
  render(){
    return(
      <div className='container'>
        <div className='inputs'>
          <div className='names'>
            <input type="text" onChange={(e)=>this.ChangeField("FirstName", e)} placeholder="Enter First Name"/>
            <input type="text" onChange={(e)=>this.ChangeField("LastName", e)} placeholder="Enter Last Name"/>
          </div>
          
        </div>
        <div className='display'>
          <TextDisplay FirstName={this.state.FirstName} field="FirstName" />
          <TextDisplay LastName={this.state.LastName} field="LastName" />
        </div>
        
       
      </div>
    )
  }
}
export default App;
