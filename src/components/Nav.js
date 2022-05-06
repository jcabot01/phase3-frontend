import React from 'react';
import { Link } from "react-router-dom";



function Nav() { //need to pass down various forms of state, savingsTotal, etc...
  // function handleSavingsChecked //=>
  // function handleCheckingChecked //=>
  // function handleInvestingChecked //=>



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
      {/* <div>
      <input type="checkbox" onChange={handleSavingsChecked}></input>
      <h4 className='headerCategories'>Savings: ${savingsTotal}</h4>
      </div>
      <div>
      <input type="checkbox" onChange={handleCheckingChecked}></input>
      <h4 className='headerCategories'>Checking: ${checkingTotal}</h4>
      </div>
      <div>
      <input type="checkbox" onChange={handleInvestingChecked}></input>
      <h4 className='headerCategories'>Investing: ${investingTotal}</h4>
      </div> */}
      </div>
    </nav>
  );
};

export default Nav

//user checks a box, onCheck event, sends a callback up to App to render cards-state on the page, GET.  Need one for each category