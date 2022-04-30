import React, { useState } from 'react'

function AddNew({ onEventFormSubmit }) {
  const [categoryId, setCategoryId] = useState("")  //state of category
  const [eventName, setEventName] = useState(""); //state of eventName
  const [eventCost, setEventCost] = useState(""); //state of amount

  function handleFormSubmit(e) {  //handle submit of new event obj
    e.preventDefault();

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
        //need to reset the radio button to back to default (which is savings)
        setEventName("");
        setCategoryId("");
      })
  };

function handleChange(e) {
  const target = e.target;
  if (target.checked) {
    setCategoryId(target.value);
  }
};

  return (
    <div>
      <h3 className='add-new-event-title'>Add New Event</h3>
      
        <form className='formCategories' onSubmit={handleFormSubmit}>
          <div className='radio'>
            <label>
              <input type='radio' value="1" checked={true} onChange={handleChange} />
              Savings
            </label>
          </div>
          <div className='radio'>
            <label>
              <input type='radio' value="2" onChange={handleChange} />
              Checking
            </label>
          </div><div className='radio'>
            <label>
              <input type='radio' value="3" onChange={handleChange} />
              Investing
            </label>
          </div>
          <br></br>
          <div>
            <input type="text" name="eventName" placeholder='Event Name' value={eventName} onChange={ e => setEventName(e.target.value)} />
          </div>
          <div>
            <input type="text" name="eventCost" placeholder='Event Cost' value={eventCost} onChange={ e => setEventCost(e.target.value)} />
          </div>
          <button className='form-submit-btn' type='submit'>✅</button>
        </form>
    </div>
  )
}

export default AddNew
// add new object, POST to database, submit (preventDefault), pass up gathered data via callback to App to change state of page.
