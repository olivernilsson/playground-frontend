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
        <p className="p-start">
          This is a place where i play around with code and design for the
          purpose of learning
        </p>
        <div className="bg-blue"></div>
        <h1 className="heading-pink-start float-right">
          Feel free to look around
        </h1>
      </div>
    )
  }
}

export default StartPage
