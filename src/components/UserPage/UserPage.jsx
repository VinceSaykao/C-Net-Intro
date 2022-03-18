import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';


import './UserPage.scss';
import Footer from '../Footer/Footer';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <div className="container">
      <h2 id='welcome-header'>Welcome | {user.username}!</h2>


    </div>

    <Footer />
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
