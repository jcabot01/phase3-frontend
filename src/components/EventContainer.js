import React, { useState } from 'react'
import Event from './Event'

function EventContainer({ events, onDeleteClick }) { 
// const [categories, setCategories] = useState("") //probably need to move this up to App, so that events can be rendered meeting the toggled categories

//onClick, perform GET request, get all, response is filtered by conditional
  return (
    <div>
    <div className='category-toggle-container'>

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