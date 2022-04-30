import React from 'react'

function Event({ event, onDeleteClick }) {
  
  const { id, eventName, eventCost, eventCategory} = event
  //DELETE request; still need to deal with callback up to EventContainer up to App for state, 
  function handleDelete(id) {
    fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => onDeleteClick(id))
  };

// function handleEdit  //=>activate card to edit; use a boostrap modal


  return (
    <li className="card" key={id}>
      <div>
      <div className="categoryForEachEvent">
        <h4>{eventCategory}</h4>
      </div>
      <h4>{eventName}</h4>
      <h4>{eventCost}</h4>
      <button className='deleteBtn' onClick={handleDelete}>🗑️</button>
      {/* <button className='editBtn' onClick={handleEdit}>✏️</button> */}
      {/* <button className='editSubmitBtn' onClick={handleEditSubmit}>✅</button> */}
      </div>
    </li>
  )
}

export default Event

//setup delete
// setup edit, onClick make fields active, PATCH request can be handled here, data needs to be passed up to App to render setState[...cards, updatedCard]
// setup the submit for the checkmark that goes with the PATCH (preventDefault)