import React from 'react'
import { Link } from "react-router-dom";

function Event({ id, eventName, eventCost, category, onDeleteClick }) {
  // const categoryName = category.category_name
  // console.log(categoryName)
  
  //DELETE request; still need to deal with callback up to EventContainer up to App for state, 
  function handleDelete() {
    fetch(`http://localhost:9292/events/${id}`, {
      method: "DELETE",
    })
    onDeleteClick(id)
  };

  //STILL NEED CATEGORY RENDERED BELOW!!!!!!!!!!!!!!!!!
  //STILL NEED EPIC TOGGLE TO ACTIVATE AND UPDATE!!!!!
  return (
    
    <li className="card" key={id}>
      <h4>{eventName}</h4>
      <h4>${eventCost}</h4>
      <button className='deleteBtn' onClick={handleDelete}>🗑️</button>
      <Link className='editBtn' to="/edit/:id">✏️</Link>
      {/* <Link className="nav-links" to="/addnew">Add New +</Link> */}
    </li>
  )
}

export default Event

