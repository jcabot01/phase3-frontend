import React, { useState } from 'react'
import Event from './Event'

function EventContainer({ showSavings, showChecking, showInvesting, events, onDeleteClick }) { 
  const [savingsChecked, setSavingsChecked] = useState(false)
  const [checkingChecked, setCheckingChecked] = useState(false)
  const [investingChecked, setInvestingChecked] = useState(false)

  function handleSavingsChange(e) {
    setSavingsChecked(!savingsChecked)
    const parsedSavingsValue = parseInt(e.target.value)
    if (savingsChecked === false) {
     showSavings(parsedSavingsValue)
    } else {
      return showSavings(0)}
  }

  function handleCheckingChange(e) {
    setCheckingChecked(!checkingChecked)
    const parsedCheckingValue = parseInt(e.target.value)
    if (checkingChecked === false) {
     showChecking(parsedCheckingValue)
    } else {
      return showChecking(0)}
  }

  function handleInvestingChange(e) {
    setInvestingChecked(!investingChecked)
    const parsedInvestingValue = parseInt(e.target.value)
    if (investingChecked === false) {
     showInvesting(parsedInvestingValue)
    } else {
      return showInvesting(0)}
  }
  return (
    <div>
      <div className='category-toggle-container'>
        <h3 className='category-checkbox-title'>Check box to sort by category</h3>
        <div className='checkbox-container'>
          <div className='category-checkbox'>
            <label>
              <input 
                type="checkbox"
                checked={savingsChecked}
                value="1"
                onChange={handleSavingsChange}
              />
              Savings
            </label>
          </div>
          <div className='category-checkbox'>
            <label>
              <input 
                type="checkbox"
                checked={checkingChecked}
                value="2"
                onChange={handleCheckingChange}
              />
              Checking
            </label>
          </div>
          <div className='category-checkbox'>
            <label>
              <input 
                type="checkbox"
                checked={investingChecked}
                value="3"
                onChange={handleInvestingChange}
              />
              Investing
            </label>
          </div>
        </div>
      </div>
      <div className="main-container-events">
        <div className='table-header'>
          <h5 className='category-name-title'><u>Category:</u></h5>
          <h5 className='event-name-title'><u>Event:</u></h5>
          <h5 className='cost-title'><u>Cost:</u></h5>
          <div className='deleteBtn-title'></div>
          <div className='editBtn-title'></div>
        </div>
        <ul className='cards-container'>
          {events.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              eventName={event.event_name}
              eventCost={event.event_cost}
              categoryName={event.category.category_name}
              categoryId= {event.category_id}
              onDeleteClick={onDeleteClick}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EventContainer