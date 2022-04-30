import React from 'react'
import Event from './Event'

function EventContainer({ events, onDeleteClick }) { // onUpdateEvent //will need to pass up "updated" state to App

  //might be nice to use bootstrap table
  return (
    <div className="eventsList">
      <ul>
        {events.map((event) => (
          <Event
            key = {event.id}
            id = {event.id}
            eventName = {event.event_name}
            eventCost = {event.event_cost}
            category = {event.category}
            onDeleteClick = {onDeleteClick}
            // onUpdateEvent={onUpdateEvent}
          />
        ))}
      </ul>
    </div>
  )
}

export default EventContainer