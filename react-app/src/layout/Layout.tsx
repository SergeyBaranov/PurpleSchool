import React from 'react';
import styles from './Layout.module.css';
import Header from './Header/Header';
import TopMenu from '../components/TopMenu/TopMenu';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className={styles.appLayout}>
      <Header />
      <TopMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
