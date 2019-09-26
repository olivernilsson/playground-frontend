import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import StartPage from "./views/StartPage/StartPage"

function App() {
  return (
    <div className="App">
      <StartPage />
    </div>
  )
}

export default App
