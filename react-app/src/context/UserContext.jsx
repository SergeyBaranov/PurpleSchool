import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  loadProfiles,
  saveProfiles,
  loadCurrentUser,
  saveCurrentUser,
  updateProfileInStorage,
} from '../utils/storageUtils';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfiles = loadProfiles();
    setProfiles(savedProfiles);

    const savedUser = loadCurrentUser();
    if (savedUser) {
      const userExists = savedProfiles.find((p) => p.name === savedUser.name);
      if (userExists && userExists.isLogined) {
        setCurrentUser(userExists);
      }
    }
  }, []);

  const login = (userName) => {
    const user = profiles.find((p) => p.name === userName);
    if (user) {
      const loggedInUser = { ...user, isLogined: true };

      const updatedProfiles = profiles.map((profile) =>
        profile.name === userName ? loggedInUser : profile
      );
      setProfiles(updatedProfiles);
      saveProfiles(updatedProfiles);

      setCurrentUser(loggedInUser);
      saveCurrentUser(loggedInUser);
      navigate('/');
    }
  };

  const logout = () => {
    if (currentUser) {
      const updatedProfiles = updateProfileInStorage(currentUser.name, false);
      setProfiles(updatedProfiles);

      setCurrentUser(null);
      saveCurrentUser(null);
      navigate('/');
    }
  };

  return (
    <UserContext.Provider value={{ profiles, currentUser, login, logout, setProfiles }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
