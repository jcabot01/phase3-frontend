import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AddNew from "./components/AddNew";
import EventContainer from "./components/EventContainer";
import Edit from "./components/Edit";



function App() {
  const [events, setEvents] = useState([]);
  // const destructuredEvents = events.map((event) => 
  //   event.category.category_name)

  useEffect( () => {
    fetch("http://localhost:9292/events")
      .then((res) => res.json())
      .then((eventsObjs) => setEvents(eventsObjs))
  }, []);

  function onDeleteClick(id) {
    const remaingingEvents = events.filter((event) => event.id !== id)
    setEvents(remaingingEvents)
  };

  function onEventUpdate(updatedEventObj) {
    const updatedEvents = events.map((event) => {
      if (event.id === updatedEventObj.id) {
        return updatedEventObj;
      } else {
        return event;
      }
    }); 
    setEvents(updatedEvents);
  }

  function onEventFormSubmit(newEvent) {
    console.log(newEvent)
    setEvents([...events, newEvent])
  };

  return (
    <Router>
      <Nav />
        <Routes>
          <Route path ="/events/new" element={<AddNew onEventFormSubmit={onEventFormSubmit} />} />
          <Route path ="/" element={<EventContainer events={events} onDeleteClick={onDeleteClick} />} />
          <Route path ="/events/:id/edit" element={<Edit events={events} onEventUpdate={onEventUpdate} />} /> 
          <Route path ="*" element="404 Page Not Found"/>
        </Routes>
    </Router>
  );
};

export default App;

