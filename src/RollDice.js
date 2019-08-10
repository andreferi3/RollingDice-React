import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

export default class RollDice extends Component {

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props) {
        super(props)

        this.state = {
            dice1: 'one',
            dice2: 'one',
            rolling: false
        }

        this.roll = this.roll.bind(this)
    }

    roll() {
        // pick 2 new rolls
        let pick1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        let pick2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

        // set state
        this.setState({
            dice1: pick1,
            dice2: pick2,
            rolling: true
        })

        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000)
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Dice face={this.state.dice1} rolling={this.state.rolling} />
                    <Dice face={this.state.dice2} rolling={this.state.rolling} />
                </div>

                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </div>
        )
    }
}
