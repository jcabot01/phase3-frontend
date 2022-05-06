import React from 'react'
import { Link } from "react-router-dom";

function Event({ id, eventName, eventCost, categoryName, categoryId, onDeleteClick }) {
 
  const eventInfo = { id, eventName, eventCost, categoryName, categoryId}




  function handleDelete() {
    fetch(`http://localhost:9292/events/${id}`, {
      method: "DELETE",
    })
    onDeleteClick(id)
  };

  return (
    
    <li className="card" key={id}>
      <div className='card-category-name'>
        <h3>{categoryName}</h3>
      </div>
      <h4 className='card-event-name'>{eventName}</h4>
      <h4 className='card-cost'>${eventCost}</h4>
      <button className='deleteBtn' onClick={handleDelete}>🗑️</button>
      <Link className='editBtn' to={`/events/${id}/edit`} state={eventInfo} >✏️</Link> 
    </li>
  )
}

export default Event

