import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"
import "./styles.scss"
import { NavLink } from "react-router-dom"

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
      <Menu right={true} disableAutoFocus>
        <NavLink
          id="home"
          className="menu-item"
          to="/"
          exact
          activeStyle={{
            color: "#9ca8d0"
          }}
        >
          Start
        </NavLink>
        <NavLink
          id="fridgepoetry"
          className="menu-item"
          exact
          to="/fridgepoetry"
          activeStyle={{
            color: "#9ca8d0"
          }}
        >
          Fridge poetry
        </NavLink>
        <NavLink
          id="gallery"
          className="menu-item"
          exact
          to="/gallery"
          activeStyle={{
            color: "#9ca8d0"
          }}
        >
          Gallery
        </NavLink>
      </Menu>
    )
  }
}

export default Nav
