import React from 'react'
import Event from './Event'


function EventContainer({ events, onSelectedCategory, selectedCategory, eventsCategories, onDeleteClick }) { 
  const categoryButtons = eventsCategories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    console.log(className)
    return(
      <button
        key={category}
        className={className}
        onClick={() => onSelectedCategory(category)}
        >
          {category}
        </button>
    );
  });
  return (
    <div>
      <div className='categories'>
        <h3 className='category-buttons'>Select a Category to show</h3>
        <div className='category-buttons'>
          {categoryButtons} 
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