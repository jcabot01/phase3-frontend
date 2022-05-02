import React, { useState, useEffect } from "react"; //add useState and useEffect hooks
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AddNew from "./components/AddNew";
import EventContainer from "./components/EventContainer";
import Edit from "./components/Edit";



function App() {
  const [events, setEvents] = useState([]);

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
  };

  function onEventFormSubmit(newEvent) {
    setEvents([...events, newEvent])
  };

  return (
    <Router>
      <Nav />
        <Routes>
          <Route path ="/addnew" element={<AddNew onEventFormSubmit={onEventFormSubmit} />} />
          <Route path ="/" element={<EventContainer events={events} onDeleteClick={onDeleteClick} />} />
          <Route path ="/edit/:id" element={<Edit onEventUpdate={onEventUpdate} />} /> 
          <Route path ="*" element="404 Page Not Found"/>
        </Routes>
    </Router>
  );
};

export default App;

