import React, { useState } from 'react'
import { useNavigate } from "react-router";

function AddNew({ onEventFormSubmit }) {
  const navigate = useNavigate();
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
    setCategoryId(e.target.value)
  }

  return (
    <div>
      <h3 className='add-new-event-title'>Add New Event</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="categories">Choose a category:</label>
        <select name="categories" onChange={handleCategory} id={categoryId}>
          <option value="Savings">Savings</option>
          <option value="Checking">Checking</option>
          <option value="Investing">Investing</option>
        </select>
        <br></br>
        <input type="text" name="eventName" placeholder='Event Name' value={eventName} onChange={handleEvent}/>
        <input type="text" name="eventCost" placeholder='Event Cost' value={eventCost} onChange={handleCost}/>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
};

export default AddNew