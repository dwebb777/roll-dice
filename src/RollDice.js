import React, { Component } from "react"
import Die from "./Die"

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  }

  constructor(props) {
    super(props)

    this.state = {
      die1: "one",
      die2: "one",
    }
    // we want this to be bound to the instance of the component
    this.roll = this.roll.bind(this)
  }

  roll() {
    // Pick 2 new rolls
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    // set State with new rolls
    this.setState({ die1: newDie1, die2: newDie2 })
  }

  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    )
  }
}
