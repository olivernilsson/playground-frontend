import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Nav from "./components/Nav/index"
import StartPage from "./views/StartPage/StartPage"
import FridgePoetry from "./views/FridgePoetry/index"

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Nav />
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/fridgepoetry" component={FridgePoetry} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
