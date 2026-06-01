
import { useState } from 'react';
import './App.css';
import Body from './layout/Body/Body';
import Header from './layout/Header/Header';

function App() {
  const [profiles] = useState([
    { name: 'Вася', isLogined: false }
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userName) => {
    const user = profiles.find(p => p.name === userName);
    if (user) {
      setCurrentUser({ ...user, isLogined: true });
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };
  
  return (
    <div className='app'>
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <Body currentUser={currentUser} onLogin={handleLogin} />        
    </div>
  );
}

export default App;
