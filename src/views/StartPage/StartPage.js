import React, { Component } from "react"
import "./styles.scss"

import axios from "axios"

class StartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getTestInfo()
  }

  async getTestInfo() {
    const testInfo = await axios({
      method: "GET",
      url: `/api/tests`
    })
    console.log(testInfo)
  }

  render() {
    return (
      <div className="container-start">
        <h1 className="heading-start">Welcome to the playground</h1>
        <div className="bg-blue"></div>
      </div>
    )
  }
}

export default StartPage
