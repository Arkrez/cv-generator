import { Component } from 'react';
import {TextDisplay, ExperienceDisplay, AddExperience} from './TextDisplay'
import InfoCard from './Info';
import uniqid from "uniqid"
class Main extends Component{
  constructor(){
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Email: "",
      Experiences: [],
      Experience: {
        header: "",
        start: "",
        end: "",
        desc: "",
        id: uniqid(),
      },
      Educations: [],
      Education: {
        header: "",
        start: "",
        end: "",
        desc: "",
        id: uniqid(),
      },
    }
  }
  ChangeField = (key, e) =>{
    e.preventDefault();
    this.setState({
      [key]: e.target.value
    })
  }
  AddInputToState = (e) =>{
    e.preventDefault();
    this.setState({
      Experience:{
        header: "",
        start: "",
        end: "",
        desc: "",
        id:  uniqid(),
      },
      Experiences: this.state.Experiences.concat(this.state.Experience)
    })
  }
  ChangeFieldE = (key, e) =>{
    e.preventDefault();
    let i = 0;
    this.state.Experiences.map((input)=>{
      if(e.target.id === input.id){
      
        const obj = this.state.Experiences[i];
        let arr = this.state.Experiences;
        arr.splice(i, 1, obj)
        obj[key] = e.target.value;
        this.setState({
          Experiences: arr
        })
      }
      i++;
    })
  }
  RemoveExp = (e) =>{
    e.preventDefault();
    let i = 0;
    this.state.Experiences.map((input)=>{
      if(e.target.id === input.id){
        let arr = this.state.Experiences;
        arr.splice(i, 1);
        this.setState({
          Experiences: arr
        })
      }
      i++;
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
            <AddExperience Inputs={this.state.Experiences} action={this.ChangeFieldE} removeExp={this.RemoveExp}/>
            <button onClick={this.AddInputToState}>Add an input field</button>
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
          <div className='sideBar'></div>
          <div className='resumeContent'>
          <label for="experienceCardD">Experience</label>
            <ExperienceDisplay Inputs={this.state.Experiences} action={this.ChangeField}/>
            <label for="educationCardD">Education</label>
          </div>
        </div>
      </div>
    )
  }
}
export default Main;
