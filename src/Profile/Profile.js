
function Profile(props){
    return(
        <>
        <img className="rounded" src={props.imge} width="350" height="400" />
        <h1 style={{backgroundColor:"#C0C0C0",}}>{props.fullName}</h1>
        <h2>{props.bio}</h2>
        <h3>{props.profession}</h3>
        </>
    );

}


export default Profile;