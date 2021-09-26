import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="home-section">
      <div className="container">
        <header className="">
          <div className="row px-3">
            <div className="col-lg-10 col-xl flex-row mx-auto px-0">
              <h4 className="text-white text-center  text-xl">Welcome to Permata!</h4>
              <p className="text-center text-white">
                Please click this &nbsp;
                <Link to="/login" className="nav-item">
                  link
                </Link>
                &nbsp; to login
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Homepage;
