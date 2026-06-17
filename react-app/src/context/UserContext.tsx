import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  loadProfiles,
  saveProfiles,
  loadCurrentUser,
  saveCurrentUser,
  updateProfileInStorage,
} from '../utils/storageUtils';
import { Profile, UserContextType } from '../types';

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [currentUser, setCurrentUser] = useState<Profile | null>(null);
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

  const login = (userName: string): void => {
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

  const logout = (): void => {
    if (currentUser) {
      const updatedProfiles = updateProfileInStorage(currentUser.name, false);
      setProfiles(updatedProfiles);

      setCurrentUser(null);
      saveCurrentUser(null);
      navigate('/');
    }
  };

  const value: UserContextType = { profiles, currentUser, login, logout, setProfiles };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
