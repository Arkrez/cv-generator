const TextDisplay = (props) =>{
    
    const text= props[props.field];
 
    return(
        <div>{text === ""? props.field : text }</div>
    )
    
}

const AddExperience = (props) =>{
    
    return(
        
        props.Inputs.map((input)=>{
            return (
                <div key={input.id} className="experience">
                    <input type="text" placeholder="Experience Header" onChange={(e)=>props.action(props.name,"header", e)} id={input.id}></input>
                    <input type="text" placeholder="Start" onChange={(e)=>props.action(props.name,"start", e)} id={input.id}></input>
                    <input type="text" placeholder="End" onChange={(e)=>props.action(props.name,"end", e)} id={input.id}></input>
                    <textarea placeholder="Desc" onChange={(e)=>props.action(props.name,"desc", e)} id={input.id}></textarea>
                    <button className="deleteExp" id={input.id} onClick={(e)=>props.removeExp(props.name, e)}>Delete</button>
                </div>
                    
            )
        })
            
    )
}
    
const ExperienceDisplay = (props) =>{
    return(
         props.Inputs.map((input)=>{
            return(
                <div key={input.id} className="expCardD"> 
                    <div className="expHeader">{input.header}</div>
                    <div>{input.start}</div>
                    <div>-</div>
                    <div>{input.end}</div>
                    <div>{input.desc}</div>
                </div>
            )
        })
            
     )
}


export {TextDisplay, ExperienceDisplay, AddExperience};