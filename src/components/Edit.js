import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

function Edit({ onEventUpdate }) {
  const navigate = useNavigate();
  const { id } =useParams();
  const [editedEventName, setEditedEventName] = useState("")
  const [editedEventCost, setEditedEventCost] = useState("")

  function handleUpdateFormSubmit(e) {
    e.preventDefault();

  // patch
  fetch(`http://localhost:9292/edit/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_name: editedEventName,
      event_cost: editedEventCost
      // category
    }),
  })
    .then((res) => res.json())
    .then((updatedEvent) => onEventUpdate(updatedEvent));
    navigate('/')
  }

  return (
    <div className='edit-event container'>
      <h3 className='add-new-event-title'>Edit Event</h3>
      <div>
        <h3 className='add-new-event-title'>Add New Event</h3>
        <form action={handleUpdateFormSubmit}>
          <label for="categories">Choose a category:</label>
          <select name="categories" id="categories">
            <option value="savings">Savings</option>
            <option value="checking">Checking</option>
            <option value="investing">Investing</option>
          </select>
          <br></br>
          <input type="text" name="eventName" placeholder='Edit Event Name' value={editedEventName} onChange={ e => setEditedEventName(e.target.value)}/>
          <input type="text" name="eventCost" placeholder='Edit Event Cost' value={editedEventCost} onChange={ e => setEditedEventCost(e.target.value)}/>
          <input type='submit' value='Update'/>
        </form>
      </div>
    </div>
  )
}

export default Edit