import React, { useState } from 'react'

function AddNew({ onEventFormSubmit }) {
  const [categoryName, setCategoryName] = useState("")  //state of category
  const [eventName, setEventName] = useState(""); //state of eventName
  const [eventCost, setEventCost] = useState(""); //state of amount

  function handleFormSubmit(e) {  //handle submit of new event obj
    e.preventDefault();

    const addNewEvent = {
      category_name: categoryName,
      event_name: eventName,
      event_cost: eventCost 
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
        onEventFormSubmit(newEvent)
      })
  };

function handleChange(e) {
  const target = e.target;
  if (target.checked) {
    setCategoryName(target.value);
  }
};

function handleEventName(e) {
  setEventName(e.target.value)
};

function handleEventCost(e) {
  setEventCost(e.target.value)
};

  return (
    <div>
      <h3 className='add-new-event-title'>Add New Event</h3>
        <form className='formCategories' onSubmit={handleFormSubmit}>
          <div className='radio'>
            <label>
              <input type='radio' value='savings' checked={true} onChange={handleChange} />
              Savings
            </label>
          </div>
          <div className='radio'>
            <label>
              <input type='radio' value='checking' onChange={handleChange} />
              Checking
            </label>
          </div><div className='radio'>
            <label>
              <input type='radio' value='investing' onChange={handleChange} />
              Investing
            </label>
          </div>
          <br></br>
          <div>
            <input type="text" name="eventName" placeholder='Event Name' value={eventName} onChange={handleEventName} />
          </div>
          <div>
            <input type="text" name="eventCost" placeholder='Event Cost' value={eventCost} onChange={handleEventCost} />
          </div>
          <button className='form-submit-btn' type='submit'>✅</button>
        </form>
    </div>
  )
}

export default AddNew
// add new object, POST to database, submit (preventDefault), pass up gathered data via callback to App to change state of page.
