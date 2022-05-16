import React, { useState } from 'react'
import { useNavigate } from "react-router";

function AddNew({ onEventFormSubmit }) {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("")  //state of category
  const [eventName, setEventName] = useState(""); //state of eventName
  const [eventCost, setEventCost] = useState(""); //state of amount

  function handleFormSubmit(e) {
    e.preventDefault();

 
    const addNewEvent = {
      event_name: eventName,
      event_cost: eventCost,
      category_id: categoryId
    };
 
    fetch("http://localhost:9292/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewEvent),
    })
      .then((res) => res.json())
      .then((newEvent) => {
        let categoryName //create a variable that is reassignable
          if (newEvent.category_id === 1) { //if HTTP response.category_id = X, then set categoryName to a particular category
              categoryName = "Savings"
            } else if (newEvent.category_id === 2) {
                categoryName = "Checking"
            } else {
                categoryName = "Investing"
          }
        const itemCategory = { //setup the nested object to update state; the GET request is expecting this format
          categoryId: categoryId, //pulled in from State on this page
          category_name: categoryName, //set to a string from the conditional statement above
          created_at: null,
          updated_at: null
        }
        let updatedEvent = { //create a new variable and set it to a copy of the HTTP response
          ...newEvent 
        }
        updatedEvent.category = itemCategory //the nested category object = the object variable we created
        onEventFormSubmit(updatedEvent); //everything is bundled together now, update State of App with this object ( with a nested category object)
        navigate('/');
      })
  };

  function handleEvent(e) {
    setEventName(e.target.value)
  };

  function handleCost(e) {
   setEventCost(e.target.value)
  };

  function handleCategory(e) {
    const categoryInt = parseInt(e.target.value, 10)
    setCategoryId(categoryInt)
  }

  return (
    <div className='add-new-container'>
      <h3 className='add-new-event-title'>Add New Event</h3>
      <form onSubmit={handleFormSubmit}>
        <div className='dropdown-container'>
          <label className='dropdowm-label' htmlFor="categories">Choose a category:</label>
          <select className='dropdown' defaultValue="" name="categories" onChange={handleCategory}>
            <option disabled></option>
            <option value="1">Savings</option>
            <option value="2">Checking</option>
            <option value="3">Investing</option>
          </select>
        </div>
        <br></br>
        <div className='input-container'>
          <input className='add-new-text-area' type="text" name="eventName" placeholder='Event Name' value={eventName} onChange={handleEvent}/>
          <input className='add-new-text-area'type="text" name="eventCost" placeholder='Event Cost' value={eventCost} onChange={handleCost}/>
        <br></br>
        </div>
        <div className='submit-container'>
         <input type='submit' value='Add New Event!'/>
        </div>
      </form>
    </div>
  )
};

export default AddNew