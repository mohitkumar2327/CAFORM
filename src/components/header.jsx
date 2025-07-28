// import React from 'react';
// import userImage from '../assets/profile.jpg';
// import '../css/header.css';
// import homeIcon from '../assets/home.png';

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className="header-top">
//         <h3>User Name: John</h3>
//         <div className="profile">
//           <img src={userImage} alt="profile" />
//         </div>
//       </div>
//       <div className="header-bottom">
//         <div className="breadcrumb">
//           <img src={homeIcon} alt="Home" className="home-icon" />
//           <b><a href="/client-portal">Client Portal &gt; Dashboard</a></b> {/* The entire breadcrumb is a link */}
//         </div>
//         <p>Master Entity name: x x x x</p>
//       </div>
//     </div>
//   );
// };

// export default Header;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* whith redux */



import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector hook
import userImage from '../assets/profile.jpg';
import '../css/header.css';
import homeIcon from '../assets/home.png';

const Header = () => {
  // Use useSelector to grab the state from the Redux store
  const userName = useSelector((state) => state.user.name);
  const masterEntityName = useSelector((state) => state.user.masterEntityName);

  return (
    <div className='header'>
      <div className="header-top">
        {/* Now the name is dynamic, coming from Redux state */}
        <h3>User Name: {userName}</h3>
        <div className="profile">
          <img src={userImage} alt="profile" />
        </div>
      </div>
      <div className="header-bottom">
        <div className="breadcrumb">
          <img src={homeIcon} alt="Home" className="home-icon" />
          <b><a href="/client-portal">Client Portal <b>&gt;</b> Dashboard</a></b>
        </div>
        {/* The entity name is also dynamic */}
        <p>Master Entity name: {masterEntityName}</p>
      </div>
    </div>
  );
};

export default Header;

