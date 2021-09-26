import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/auth.service';
import EventBus from '../common/EventBus';

function Menu() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on('logout', () => {
      logOut();
    });

    return () => {
      EventBus.remove('logout');
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };
  return (
    <aside className="main-sidebar elevation-4 sidebar-light-primary">
      {/* Brand Logo */}
      {/* Brand Logo */}

      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">{/* <img src="https://i.ibb.co/Vqh8Gfs/avatar-placeholder.png" className="img-circle elevation-2" alt="User" /> */}</div>
          <div className="info">
            <Link smooth to="/" className="d-block text-decoration-none">
              Permata
            </Link>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
    with font-awesome or any other icon font library */}

            <li className="nav-item">
              <Link to="/user" className="nav-link  ">
                <i className="nav-icon fas fa-user" />
                <p>Profile</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login" className="nav-link" onClick={logOut}>
                <i className="nav-icon fas fa-sign-out-alt" />
                <p>Keluar</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default Menu;
