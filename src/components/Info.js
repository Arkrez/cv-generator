const InfoCard = (props) =>{
    return(
        <div className='info'>
            <input type="text" onChange={(e)=>props.ChangeField("FirstName", e)} placeholder="Enter First Name"/>
            <input type="text" onChange={(e)=>props.ChangeField("LastName", e)} placeholder="Enter Last Name"/>
         
            <input type="phone" onChange={(e)=>props.ChangeField("PhoneNumber", e)} placeholder="Enter Phone Number"/>
            <input type="email" onChange={(e)=>props.ChangeField("Email", e)} placeholder="Enter Email"/>
        </div>
    )
    
}
export default InfoCard;