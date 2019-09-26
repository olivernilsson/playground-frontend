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
    return <div></div>
  }
}

export default StartPage
