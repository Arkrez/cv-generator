const TextDisplay = (props) =>{
    const text= props[props.field];
 
    return(
        <div>{text == ""? props.field : text }</div>
    )
    
}
export default TextDisplay;