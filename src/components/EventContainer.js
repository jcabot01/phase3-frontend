import React from 'react'
import Event from './Event'

function EventContainer( {events}) {  //pass down category
  //render each card here with a .map assign attributes; set it to a variable
  //might be nice to use bootstrap table
  const eventObjs = events.map((event) =>
    <Event
      key = {event.id}
      eventName = {event.event_name}
      eventCost = {event.event_cost}
      // pass down category
    />
  )
  return (
    <div>
      <ul classname="eventObjs">{eventObjs}</ul>
    </div>
  )
}

export default EventContainer