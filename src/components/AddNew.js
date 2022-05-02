import React, { useState } from 'react'
import { useNavigate } from "react-router";

function AddNew({ onEventFormSubmit }) {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("")  //state of category
  const [eventName, setEventName] = useState(""); //state of eventName
  const [eventCost, setEventCost] = useState(""); //state of amount

  function handleFormSubmit(e) {  //handle submit of new event obj
    e.preventDefault();

    console.log(eventName, eventCost, categoryId)
    const addNewEvent = { //I don't think I need to add a uuid because SQLlite3 will do it automatically  
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
        setCategoryId(newEvent.categories)
        //need to reset the radio button to back to default (which is savings)
        // setEventName("");
        // setCategoryId("");
        navigate('/');
      })
  };

  function handleEvent(e) {
  setEventName(e.target.value)
  };

  function handleCost(e) {
  setEventCost(e.target.value)
  };

  return (
    <div>
      <h3 className='add-new-event-title'>Add New Event</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="categories">Choose a category:</label>
        <select name="categories" id={categoryId}>
          <option value="savings">Savings</option>
          <option value="checking">Checking</option>
          <option value="investing">Investing</option>
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