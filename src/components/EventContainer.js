import React from 'react'
import Event from './Event'

function EventContainer( {events, onDeleteClick }) { // onUpdateEvent //will need to pass up "updated" state to App

  //might be nice to use bootstrap table
  return (
    <div>
      <ul classname="eventsList">
        {events.map((event) => (
          <Event
            key={event.id}
            event={event}
            onDeleteClick={onDeleteClick}
            // onUpdateEvent={onUpdateEvent}
          />
        ))}
      </ul>
    </div>
  )
}

export default EventContainer