import React, { Component } from "react"
import Die from "./Die"
import "./RollDice.css"

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  }

  constructor(props) {
    super(props)

    this.state = {
      die1: "one",
      die2: "one",
      rolling: false,
    }
    // we want this to be bound to the instance of the component
    this.roll = this.roll.bind(this)
  }

  roll() {
    // Pick 2 new rolls
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    // set State with new rolls
    this.setState({ die1: newDie1, die2: newDie2, rolling: true })

    //Wait 1 second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false })
    }, 1000)
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <div>
          <button onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling..." : "Role Dice!"}
          </button>
        </div>
      </div>
    )
  }
}
