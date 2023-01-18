import React, { Component } from "react"
import "./Die.css"
class Die extends Component {
  render() {
    // The Die className is added for styling
    return <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && "rolling"}`} />
  }
}

export default Die
