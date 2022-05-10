import React, { useState, useEffect } from "react";
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
  }

  function onEventFormSubmit(newEvent) {
    const updatedEvents = [newEvent, ...events]
    setEvents(updatedEvents)
  };

  // checkbox toggles  ===Checkout grocery lab/shopping cart
  // if savings is checked 
  // else
  function showSavings(showSavings){
    console.log(showSavings)
    const copyOfAllEvents = [...events]
    const onlySavings = events.filter((event) => event.category_id === showSavings)
    console.log(onlySavings)
    return (showSavings === 1 ? setEvents(onlySavings) : setEvents(copyOfAllEvents))
  }
  function showChecking(showChecking){
    console.log(showChecking)
    const copyOfAllEvents = [...events]
    const onlyChecking = events.filter((event) => event.category_id === showChecking)
    console.log(onlyChecking)
    return (showChecking === 2 ? setEvents(onlyChecking) : setEvents(copyOfAllEvents))
  }
  function showInvesting(showInvesting){
    console.log(showInvesting)
    const copyOfAllEvents = [...events]
    console.log(copyOfAllEvents)
    const onlyInvesting = events.filter((event) => event.category_id === showInvesting)
    console.log(onlyInvesting)
    return (showInvesting === 3 ? setEvents(onlyInvesting) : setEvents(copyOfAllEvents))
  }
  

  return (
    <Router>
      <Nav />
        <Routes>
          <Route path ="/events/new" element={<AddNew onEventFormSubmit={onEventFormSubmit} />} />
          <Route path ="/" element={<EventContainer 
                                      showSavings={showSavings} 
                                      showChecking={showChecking}
                                      showInvesting={showInvesting}
                                      events={events} 
                                      onDeleteClick={onDeleteClick}/>} 
                                      />
          <Route path ="/events/:id/edit" element={<Edit events={events} onEventUpdate={onEventUpdate} />} /> 
          <Route path ="*" element="404 Page Not Found"/>
        </Routes>
    </Router>
  );
};

export default App;

