import React from "react";
import EventBinding from "./EventBinding";
import EventHandler from "./EventHandler";
import HookUseState from "./HookUseState";


function App() {
  return (
      <div>
        <EventHandler /> <hr></hr>
        <EventBinding /> <hr></hr>
        <HookUseState />
      </div>
  );
}

export default App;
