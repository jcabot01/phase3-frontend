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
  const [editedCategoryId, setEditedCategoryId] = useState(location.state.categoryId)
  // const [editedCategoryName, setEditedCategoryName] = useState(location.state.categoryName)
 
  
 
  function handleUpdateFormSubmit(e) {
    e.preventDefault();

  const editedPackage = {
    event_name: editedEventName,
    event_cost: editedEventCost,
    category_id: editedCategoryId,
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
    .then((res) => res.json())
    .then((updatedEvent) => {
      let categoryName
        if (updatedEvent.category_id === 1) {
          categoryName = "Savings"
        } else if (updatedEvent.category_id === 2) {
          categoryName = "Checking"
        } else {
          categoryName = "Investing"
        }
      const categoryObjectInDB = {
        category_id: editedCategoryId,
        category_name: categoryName,
        created_at: null,
        updated_at: null 
      }
      let patchEvent = {
        ...updatedEvent
      }
      patchEvent.category = categoryObjectInDB
      onEventUpdate(patchEvent);
      navigate('/')
    });
    
  }

  function handleCategoryChange(e) {
    const categoryInt = parseInt(e.target.value, 10)
    setEditedCategoryId(categoryInt)
  } 

  function handleEditedEventCost(e) {
    setEditedEventCost(e.target.value)
    // const costInt = parseInt(e.target.value, 10)
    // setEditedEventCost(costInt)
  };

  function handleEditedEventName(e) {
    setEditedEventName(e.target.value)
  };



  return (
    <div className='add-new-container'>
      <h3 className='add-new-event-title'>Edit Event</h3>
      <div>
        <form onSubmit={handleUpdateFormSubmit}>
          <div className='dropdown-container'>
            <label className='dropdowm-label' htmlFor="categories">Choose a category:</label>
            <select className='dropdown' defaultValue="" name="categories" onChange={handleCategoryChange}>
              <option disabled></option>
              <option value="1">Savings</option>
              <option value="2">Checking</option>
              <option value="3">Investing</option>
            </select>
          </div>
          <br></br>
          <div className='input-container'>
            <input type="text" className="add-new-text-area" placeholder='Edit Event Name' value={editedEventName} onChange={handleEditedEventName}/>
            <input type="text" className="add-new-text-area" placeholder='Edit Event Cost' value={editedEventCost} onChange={handleEditedEventCost}/>
          </div>
          
          <div className='submit-container'>
            <input type='submit' value='Update'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit