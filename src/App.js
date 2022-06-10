import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import { AuthContextProvider } from './components/context/AuthContext';
function App() {
  return (
    <div className='App'>
      <Nav />
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
