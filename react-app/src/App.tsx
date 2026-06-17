import './App.css';
import React from 'react';
import Body from './layout/Body/Body';
import Header from './layout/Header/Header';
import { UserProvider } from './context/UserContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';

const App: React.FC = () => {
  return (
    <UserProvider>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Body />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </UserProvider>
  );
};

export default App;
