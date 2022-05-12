import React from 'react';
import { Link } from "react-router-dom";



function Nav() { 

  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-events-list'>
          <Link className="nav-links" to="/">Events List</Link>
        </div>
        <div className='nav-add-new'>
          <Link className="nav-links" to="/events/new">Add New +</Link>
        </div>
      </div>
      <div className='title-picture-container'>
      <h1 className='pageTitle'>The Monthly Money Maximizer</h1>
      <img className='money-picture' src= "./images/pexels-pixabay-164527.jpg" alt="money rolls"></img>
      </div>
    </nav>
  );
};

export default Nav

