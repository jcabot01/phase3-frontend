import React from 'react'
import Event from './Event'

function EventContainer({ events, onDeleteClick }) { // onUpdateEvent //will need to pass up "updated" state to App
//eventUpdate
  return (
    <>
      <ul className="eventsList">
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
    </>
  )
}

export default EventContainer