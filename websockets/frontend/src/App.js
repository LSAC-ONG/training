import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Main from "./routes/main_component";
import LogIN from "./routes/LogIN"
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        {/*<Navbar />*/}
        <Main />
      </div>
  );
}

export default App;
