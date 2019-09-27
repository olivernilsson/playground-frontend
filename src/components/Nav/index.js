import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import "./styles.scss"
import { Link } from "react-router-dom"

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu right={true}>
        <Link id="home" className="menu-item" to="/">
          Start
        </Link>
        <Link id="home" className="menu-item" to="/test">
          Test
        </Link>
      </Menu>
    )
  }
}

export default Nav
