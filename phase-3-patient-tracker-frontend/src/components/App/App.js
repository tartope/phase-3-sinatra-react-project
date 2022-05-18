import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "../NavBar";
import Tracker from "../Tracker";
import Home from "../Home";
import About from "../About";

function App() {
<div>
  <p>hjbfvihbeirvbweoiuv</p>
</div>
  return (
    <BrowserRouter >
        <NavBar />
            <Switch>
              <Route path= "/home" >
                <Home />
              </Route>
              <Route path= "/tracker" >
                <Tracker />
              </Route>
              <Route path= "/about" >
                <About />
              </Route>
            </Switch>
      </BrowserRouter>
  );
}
export default App;
