import './App.css';
import React from 'react';
import { UserProvider } from './context/UserContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Body from './layout/Body/Body';
import LoginPage from './pages/LoginPage/LoginPage';
import MoviePage from './pages/MoviePage/MoviePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

const App: React.FC = () => {
  return (
    <UserProvider>
      <div className='app'>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Body />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="movie/:id" element={<MoviePage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </UserProvider>
  );
};

export default App;
