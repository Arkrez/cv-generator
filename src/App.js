import { Component } from 'react';
import './App.css';
import {TextDisplay, ExperienceDisplay} from './components/TextDisplay'
import InfoCard from './components/Info';
import ExperienceCard from './components/Experience';

class App extends Component{
  constructor(){
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Email: "",
      Experiences: [
      ],
      Experience: {
        header: "",
        start: "",
        end: "",
        desc: ""

      },
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
  UpdateExperienceList = (e) =>{
    e.preventDefault();
    this.setState({
      Experiences: this.state.Experiences.concat(this.state.Experience),
      Experience: {
        header: "",
        start: "",
        end: "",
        desc: ""
      }
    })
  }
  ChangeExperienceField = (key, key2, key3, key4, e) =>{
    e.preventDefault();
    this.setState({
      Experience: {
        [key]: e.target.value,
        [key2]: this.state.Experience[key2],
        [key3]: this.state.Experience[key3],
        [key4]: this.state.Experience[key4],
      }
    })
  }
  render(){
    return(
      <div className='container'>
        <div className='inputs'>
          <div>
            <label for="info">Info</label>
            <InfoCard ChangeField={this.ChangeField}/>
          </div>
          

          <div>
            <label for="experience">Experience</label>
            
            <ExperienceCard ChangeField={this.ChangeExperienceField} arr={this.state.Experiences}/>
            <button onClick={this.UpdateExperienceList}>+</button>
          </div>
          
          
          <div className='educationContainer'>
            <label for="education">Education</label>
            <div className='education'>
              
              <input type="text" onChange={(e)=>this.ChangeField("Education", e)} placeholder="Name of Institute"/>
              <input type="date" onChange={(e)=>this.ChangeField("EducationStart", e)}/>
              <input type="date" onChange={(e)=>this.ChangeField("EducationEnd", e)}/>
              <textarea onChange={(e)=>this.ChangeField("EducationDescription", e)} placeholder="Enter Education Description"/>
            </div>
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
            <ExperienceDisplay arr={this.state.Experiences}/>
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
