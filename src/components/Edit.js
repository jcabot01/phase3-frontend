import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

function Edit({ onEventUpdate }) { 
  const location = useLocation() //object key.state from <Event/>
  const navigate = useNavigate();
  const { id } =useParams();
  const [editedEventName, setEditedEventName] = useState(location.state.eventName)  //eventName from <Event/> Link
  const [editedEventCost, setEditedEventCost] = useState(location.state.eventCost)  //eventCost from <Event/> Link
  // const [editedCategoryId, setEditedCategoryId] = useState(location.state.categoryId)
  // const [editedCategoryName, setEditedCategoryName] = useState(location.state.categoryName)
 
  
 
  function handleUpdateFormSubmit(e) {
    e.preventDefault();

  const editedPackage = {
    event_name: editedEventName,
    event_cost: editedEventCost,
    category_id: location.state.categoryId,
    category_name: location.state.categoryName
  }
  console.log(editedPackage)

  // patch
  fetch(`http://localhost:9292/events/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedPackage),
  })
    // console.log(editedPackage)
    .then((res) => res.json())
    .then((updatedEvent) => /*onEventUpdate*/console.log(updatedEvent));
    navigate('/')
  }

  // function handleCategoryChange(e) {
  //   // console.log(parseInt(e.target.value, 10))
  //   const categoryInt = parseInt(e.target.value, 10)
  //   setEditedCategoryId(categoryInt)
  // }
  // function handleCategoryChange(e) {
  // setEditedCategoryName(e.target.value)
  // }     
//make a get request to 9292/categories, map thru, grab id,
  return (
    <div className='edit-event container'>
      <h3 className='add-new-event-title'>Edit Event</h3>
      <div>
        <form onSubmit={handleUpdateFormSubmit}>
          {/* <label htmlFor="categories">Choose a category:</label>
          <select 
            value={editedCategoryName}
            name="categories" 
            onChange={handleCategoryChange}>
              <option value="Savings">Savings</option>
              <option value="Checking">Checking</option>
              <option value="Investing">Investing</option>
          </select> */}
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