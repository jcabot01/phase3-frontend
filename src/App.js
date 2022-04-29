import React from "react"; //add useState and useEffect hooks
// import './App.css';
import Header from "./components/Header";
import AddNew from "./components/AddNew";
import EventContainer from "./components/EventContainer";



function App() {
  return (
    <div>
      <Header />
      <AddNew />
      {/* <EventContainer /> pass down events from the GET and category */}
    </div>
  );
}

export default App;
