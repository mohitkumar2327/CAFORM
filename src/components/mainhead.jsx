import React from 'react';
import { useSelector } from 'react-redux';

import userImage from '../assets/profile.jpg';
import '../css/header.css';


const Headermain = () => {
  const userName = useSelector((state) => state.user.name);
    return (
      <div className='header'>
        <div className="header-top">
          {/* Now the name is dynamic, coming from Redux state */}
          <h3>User Name: {userName}</h3>
          <div className="profile">
            <img src={userImage} alt="profile" />
          </div>
        </div>
      </div>
  );
};

export default Headermain;