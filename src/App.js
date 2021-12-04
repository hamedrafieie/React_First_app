import './App.css';
import ProfileContainer from "./components/profile_container/profile-container";
import ProfileCard from "./components/profiile-card/profile-card";
const users = [{
  id:1,
  name :'hamed',
  status:'chilling'
},
  {
    id:2,
    name :'hamed again',
    status:'chilling'
  },
  {
    id:3,
    name :'also hamed ',
    status:'chilling'
  },
  {
    id:4,
    name :'4th hamed',
    status:'chilling'}
];
function App() {
  return (
    <div className="App">
      <ProfileContainer>
        {users.map((user) => (
            <ProfileCard
                key={user.id}
                name={user.name}
                status={user.status}
            />
        ))}

      </ProfileContainer>


    </div>
  );
}

export default App;
