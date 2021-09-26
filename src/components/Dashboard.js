import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Menu />
      <Profile />
      <Footer />
    </div>
  );
};

export default Dashboard;
