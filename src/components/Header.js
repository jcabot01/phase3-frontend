import React from 'react'

function Header() { //need to pass down various forms of state, savingsTotal, etc...
  // function handleSavingsChecked //=>
  // function handleCheckingChecked //=>
  // function handleInvestingChecked //=>



  return (
    <div>
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
  );
};

export default Header

//user checks a box, onCheck event, sends a callback up to App to render cards-state on the page, GET.  Need one for each category
