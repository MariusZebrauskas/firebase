import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {

      console.log('data from auth omg', auth.currentUser);

  }, [user,auth]);
  return (
    <div className='App'>
      <Nav user={user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/register' element={<Register setUser={setUser} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;

// FIXME: fire base fire store 
// FIXME: fire bucket