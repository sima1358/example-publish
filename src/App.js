import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import Logout from './views/Logout';
import Header from './components/Header/Header';
import AuthContextProviderComponent from './context/AuthContext';

function App() {
  return (
    <div className="App">
     <AuthContextProviderComponent>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<p>I don't know this page. There was a 404 error</p>} />
      </Routes>
      </AuthContextProviderComponent>
    </div>
  );
}

export default App;
