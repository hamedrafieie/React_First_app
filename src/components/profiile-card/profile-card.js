import "./Profilecard_style.css"
function ProfileCard({name , status}){
    return(
      <div className="Profile-card">
          <img height={'100px'} src={'https://media-exp1.licdn.com/dms/image/C5603AQF8FolTR8KEYw/profile-displayphoto-shrink_800_800/0/1638355210438?e=1643846400&v=beta&t=CUVstaKyQ1IJ41-PORaDJLM3cw2pUVL6SxASJgMR22w'} />
          <h1>{name}</h1>
          <p>{status}</p>
      </div>
    );
}
export default ProfileCard