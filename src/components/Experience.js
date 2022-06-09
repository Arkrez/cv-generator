const ExperienceCard = (props) =>{
    let i = 0;
    return(
        <div className="experience">
            {props.arr.map(() => {
                i++;
                
               
                return(
                    
                    <div>
                        <input type="text" onChange={(e)=>props.ChangeField(`header`, "start", "end",`desc`,  e)} placeholder="Enter Experience Header"/>
                        <input type="date" onChange={(e)=>props.ChangeField(`start`,`header`, "end",`desc`,  e)}/>
                        <input type="date" onChange={(e)=>props.ChangeField(`end`, `header`, "start" ,  `desc`, e)}/>
                        <textarea onChange={(e)=>props.ChangeField(`desc`, `header`, "start", "end", e)} placeholder="Enter Experience"/>
                    </div>
                    
                )
            })}
        </div>
    )
    
}
export default ExperienceCard;