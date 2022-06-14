import { Component } from 'react';
import {TextDisplay, ExperienceDisplay, AddExperience} from './TextDisplay'
import InfoCard from './Info';
import uniqid from "uniqid";
import { Preview, print } from 'react-html2pdf';

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
  AddInputToState = (name, names,e) =>{
    e.preventDefault();
    this.setState({
      [name]:{
        header: "",
        start: "",
        end: "",
        desc: "",
        id:  uniqid(),
      },
      [names]: this.state[names].concat(this.state[name])
    })
  }
  ChangeFieldE = (names, key, e) =>{
    
    let i = 0;
    this.state[names].map((input)=>{
      if(e.target.id === input.id){
      
        const obj = this.state[names][i];
        let arr = this.state[names];
        arr.splice(i, 1, obj)
        obj[key] = e.target.value;
        this.setState({
          [names]: arr
        })
      }
      i++;
    })
  }
  RemoveExp = (names, e) =>{
   
    let i = 0;
    this.state[names].map((input)=>{
      if(e.target.id === input.id){
        let arr = this.state[names];
        arr.splice(i, 1);
        this.setState({
          names: arr
        })
      }
      i++;
    })
  }
  ToPdf = (e) =>{
   
    
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
            <AddExperience Inputs={this.state.Experiences} action={this.ChangeFieldE} removeExp={this.RemoveExp} name="Experiences"/>
            <button onClick={(e)=>this.AddInputToState("Experience","Experiences",e)}>Add an input field</button>
          </div>
          <div className='educationContainer'>
            <label for="education">Education</label>
                
            <label for="experience">Education</label>
            <AddExperience Inputs={this.state.Educations} action={this.ChangeFieldE} removeExp={this.RemoveExp} name="Educations"/>
            <button onClick={(e)=>this.AddInputToState("Education","Educations",e)}>Add an input field</button>
          </div>
          <button className='toPdf' onClick={()=>print('resume', 'display')}>Save</button>
        </div>
        <div className='display' id='display'>
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
            <ExperienceDisplay Inputs={this.state.Educations} action={this.ChangeField}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Main;
