const ExperienceCard = (props) =>{
    let i = 0;
    return(
        <div className="experience">
            {props.arr.map((experience) => {
                i++;
                
               
                return(
                    
                    <div className="experienceD">
                        <input type="text" onChange={(e)=>props.ChangeField(`header`, "start", "end",`desc`,  e)} placeholder="Enter Experience Header" id={experience.id}/>
                        <input type="text" onChange={(e)=>props.ChangeField(`start`,`header`, "end",`desc`, e)} placeholder="Start Date"id={experience.id}/>
                        <input type="text" onChange={(e)=>props.ChangeField(`end`, `header`, "start" ,  `desc`, e)} placeholder="End Date"id={experience.id}/>
                        <textarea onChange={(e)=>props.ChangeField(`desc`, `header`, "start", "end", e)} placeholder="Enter Experience"id={experience.id}/>
                    </div>
                    
                )
            })}
        </div>
    )
    
}
export default ExperienceCard;