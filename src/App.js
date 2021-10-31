import Profile from './Profile/Profile';
import pImg from './ProfilePic.jpg'
function App () {

  return (
    <div className="container">
      <Profile fullName="Nidhal Majdoub" bio="licencié en giene électrique " profession="web developer" imge={pImg} />
    </div>
    );
}

export default App;
