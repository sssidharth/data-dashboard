import Sidebar from './Components/sidebar';
import Header from './Components/header';
import Container from './Components/dataContainer';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([
    {name: 'Dave', email: 'dave@gmail.com'},
    {name: 'Alicia', email: 'Alicia@gmail.com'},
    {name: 'Jessica', email: 'Jessica@gmail.com'},
    {name: 'Harvey', email: 'Harvey@gmail.com'},
    {name: 'Mike', email: 'Mike@gmail.com'}
  ]);
  
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    setSelectedUser(users[0])
  },[])

  return (
    <div className="App">
      <Sidebar/>
      <Header selectedUser={selectedUser}/>
      <Container users={users} setUsers={setUsers} selectedUser={selectedUser}/>
    </div>
  );
}

export default App;
