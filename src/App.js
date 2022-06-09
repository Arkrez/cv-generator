import { Component } from 'react';
import './App.css';
import TextDisplay from './components/TextDisplay'
class App extends Component{
  constructor(){
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Email: "",
      ExperienceH1: "",
      ExperienceH2: "",
      ExperienceH3: "",
      Experience1: "",
      Experience2: "",
      Experience3: "",
      Experience1Start: "",
      Experience2Start: "",
      Experience3Start: "",
      Experience1End: "",
      Experience2End: "",
      Experience3End: "",
      Education: "",
      EducationDescription: "",
      EducationStart: "",
      EducationEnd: "",
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
          <label for="info">Info</label>
          <div className='info'>
            <input type="text" onChange={(e)=>this.ChangeField("FirstName", e)} placeholder="Enter First Name"/>
            <input type="text" onChange={(e)=>this.ChangeField("LastName", e)} placeholder="Enter Last Name"/>
         
            <input type="phone" onChange={(e)=>this.ChangeField("PhoneNumber", e)} placeholder="Enter Phone Number"/>
            <input type="email" onChange={(e)=>this.ChangeField("Email", e)} placeholder="Enter Email"/>
          </div>
          <label for="experience">Experience</label>
          <div className='experience'>
            <input type="text" onChange={(e)=>this.ChangeField("ExperienceH1", e)} placeholder="Enter Experience Header"/>
            <input type="date" onChange={(e)=>this.ChangeField("Experience1Start", e)}/>
            <input type="date" onChange={(e)=>this.ChangeField("Experience1End", e)}/>
            <textarea onChange={(e)=>this.ChangeField("Experience1", e)} placeholder="Enter Experience"/>

            <input type="text" onChange={(e)=>this.ChangeField("ExperienceH2", e)} placeholder="Enter Experience Header" />
            <input type="date" onChange={(e)=>this.ChangeField("Experience2Start", e)}/>
            <input type="date" onChange={(e)=>this.ChangeField("Experience2End", e)}/>
            <textarea  onChange={(e)=>this.ChangeField("Experience2", e)} placeholder="Enter Experience Description"/>

            <input type="text" onChange={(e)=>this.ChangeField("ExperienceH3", e)} placeholder="Enter Experience Header"/>
            <input type="date" onChange={(e)=>this.ChangeField("Experience3Start", e)}/>
            <input type="date" onChange={(e)=>this.ChangeField("Experience3End", e)}/>
            <textarea onChange={(e)=>this.ChangeField("Experience3", e)} placeholder="Enter Experience Description"/>
            

          </div>
          <label for="education">Education</label>
          <div className='education'>
            <input type="text" onChange={(e)=>this.ChangeField("Education", e)} placeholder="Name of Institute"/>
            <input type="date" onChange={(e)=>this.ChangeField("EducationStart", e)}/>
            <input type="date" onChange={(e)=>this.ChangeField("EducationEnd", e)}/>
            <textarea onChange={(e)=>this.ChangeField("EducationDescription", e)} placeholder="Enter Education Description"/>
          </div>
          
        </div>
        <div className='display'>
          <div className='contactCardD'>
            <div className='nameD'>
              <TextDisplay FirstName={this.state.FirstName} field="FirstName" />
              <TextDisplay LastName={this.state.LastName} field="LastName" />
            </div>
            <div className='contactD'>
              <TextDisplay PhoneNumber={this.state.PhoneNumber} field="PhoneNumber" />
              <TextDisplay Email={this.state.Email} field="Email" />
            </div>
            
          </div>
          <label for="experienceCardD">Experience</label>
          <div className='experienceCardD'>
            <TextDisplay Experience1Start={this.state.Experience1Start} field="Experience1Start" />
            <TextDisplay Experience1End={this.state.Experience1End} field="Experience1End" />
            <TextDisplay ExperienceH1={this.state.ExperienceH1} field="ExperienceH1" />
            <TextDisplay Experience1={this.state.Experience1} field="Experience1" />

            <TextDisplay Experience2Start={this.state.Experience2Start} field="Experience2Start" />
            <TextDisplay Experience2End={this.state.Experience2End} field="Experience2End" />
            <TextDisplay ExperienceH2={this.state.ExperienceH2} field="ExperienceH2" />
            <TextDisplay Experience2={this.state.Experience2} field="Experience2" />
            
            <TextDisplay Experience3Start={this.state.Experience3Start} field="Experience3Start" />
            <TextDisplay Experience3End={this.state.Experience3End} field="Experience3End" />
            <TextDisplay ExperienceH3={this.state.ExperienceH3} field="ExperienceH3" />
            <TextDisplay Experience3={this.state.Experience3} field="Experience3" />
          </div>
          <label for="educationCardD">Education</label>
          <div className='educatuionCardD'>
            <TextDisplay Education={this.state.Education} field="Education" />
            <TextDisplay EducationStart={this.state.EducationStart} field="EducationStart" />
            <TextDisplay EducationEnd={this.state.EducationEnd} field="EducationEnd" />
            <TextDisplay EducationDescription={this.state.EducationDescription} field="EducationDescription" />
          </div>
          
        </div>
        
       
      </div>
    )
  }
}
export default App;
