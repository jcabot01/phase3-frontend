import React, { useState, useEffect } from "react"; //add useState and useEffect hooks
// import './App.css';
import Header from "./components/Header";
import AddNew from "./components/AddNew";
import EventContainer from "./components/EventContainer";



function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/events")
    .then((res) => res.json())
    .then((eventsObjs) => setEvents([eventsObjs]))
  }, []);

  function onEventDelete(id) {
    const remaingingEvents = events.filter((event) => event.id !== id)
    setEvents([remaingingEvents])
  };

  function onEventFormSubmit(newEvent) {
    setEvents([newEvent, ...events])
  };

  return (
    <div>
      <Header />
      <AddNew onEventFormSubmit={onEventFormSubmit}/>
      <EventContainer events={events} onEventDelete={onEventDelete}/> {/* pass down events from the GET and category */}
    </div>
  );
};

export default App;
