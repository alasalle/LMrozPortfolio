import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing.js";
import Reflection from "./components/reflection.js";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing}/>
        <Route exact path="/reflections/:id" render={({ match }) => <Reflection match={match} />}/>
      </div>
    </Router>
  );
}

export default App;
