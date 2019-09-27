import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import StartPage from "./views/StartPage/StartPage"
import Nav from "./components/Nav/index"

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Nav />
          <Switch>
            <Route exact path="/" component={StartPage} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
