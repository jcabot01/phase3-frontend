import React, { useState } from 'react'
// import { useNavigate } from "react-router";

function AddNew({ onEventFormSubmit }) {
  // const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("")  //state of category
  const [eventName, setEventName] = useState(""); //state of eventName
  const [eventCost, setEventCost] = useState(""); //state of amount

  function handleFormSubmit(e) {  //handle submit of new event obj
    e.preventDefault();

    const addNewEvent = {
      event_name: eventName,
      event_cost: eventCost,
      category_id: categoryId
    };
    console.log(addNewEvent)
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewEvent),
    })
      .then((res) => res.json())
      .then((newEvent) => {
        onEventFormSubmit(newEvent);
        // navigate('/');
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
          <input className='event-input' type="text" name="eventName" placeholder='Event Name' value={eventName} onChange={handleEvent}/>
          <input className='cost-input'type="text" name="eventCost" placeholder='Event Cost' value={eventCost} onChange={handleCost}/>
        <br></br>
        </div>
        <div className='submit-container'>
         <input type='submit' value='Submit'/>
        </div>
      </form>
    </div>
  )
};

export default AddNew