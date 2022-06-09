const TextDisplay = (props) =>{
    
    const text= props[props.field];
 
    return(
        <div>{text === ""? props.field : text }</div>
    )
    
}

const ExperienceDisplay = (props) =>{
    let i =0;
    return(
        <div className="experienceD">
            {props.arr.map((experience) => {
                i++;
                return(
                    <div>
                        <div>{experience.header}</div>
                        <div>{experience.start}</div>
                        <div>{experience.end}</div>
                        <div>{experience.desc}</div>
                    </div>
                    
                )
            })}
        </div>
    )
}

export {TextDisplay, ExperienceDisplay};