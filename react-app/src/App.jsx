
import { useState, useEffect } from 'react';
import './App.css';
import Body from './layout/Body/Body';
import Header from './layout/Header/Header';
import { 
  loadProfiles, 
  saveProfiles, 
  loadCurrentUser, 
  saveCurrentUser,
  updateProfileInStorage 
} from './utils/storageUtils';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedProfiles = loadProfiles();
    setProfiles(savedProfiles);

    const savedUser = loadCurrentUser();
    if (savedUser) {
      // Verify user still exists in profiles
      const userExists = savedProfiles.find(p => p.name === savedUser.name);
      if (userExists && userExists.isLogined) {
        setCurrentUser(userExists);
      } else {
        setCurrentUser(null);
      }
    }
  }, []);

  const handleLogin = (userName) => {
    const user = profiles.find(p => p.name === userName);
    if (user) {
      const loggedInUser = { ...user, isLogined: true };
      
      // Update profiles in state and localStorage
      const updatedProfiles = profiles.map(profile =>
        profile.name === userName ? loggedInUser : profile
      );
      setProfiles(updatedProfiles);
      saveProfiles(updatedProfiles);
      
      // Update current user
      setCurrentUser(loggedInUser);
      saveCurrentUser(loggedInUser);
    }
  };

  const handleLogout = () => {
    if (currentUser) {
      // Update profile isLogined to false in both state and localStorage
      const updatedProfiles = updateProfileInStorage(currentUser.name, false);
      setProfiles(updatedProfiles);
      
      // Clear current user
      setCurrentUser(null);
      saveCurrentUser(null);
    }
  };
  
  return (
    <div className='app'>
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <Body currentUser={currentUser} onLogin={handleLogin} />        
    </div>
  );
}

export default App;
