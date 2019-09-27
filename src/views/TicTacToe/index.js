import React, { Component } from "react"
import "./styles.scss"

class TicTacToe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="wrapper-ttc">
        <h1 className="test-yellow">O</h1>
        <h1 className="test-red">X</h1>
      </div>
    )
  }
}

export default TicTacToe
