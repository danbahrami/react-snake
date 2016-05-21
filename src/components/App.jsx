import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../redux/actions"
import KeyboardListener from "./KeyboardListener.jsx"
import Ticker from "./Ticker.jsx"
import GameBoard from "./GameBoard.jsx"
import styles from "../styles"

class App extends Component {
    render() {
        const { gameStatus } = this.props

        return (
            <div style={styles.App}>
                {gameStatus === "IN_PROGRESS" ? (
                    <Ticker />
                ) : null}
                <KeyboardListener />
                <GameBoard />
            </div>
        )
    }
}

export default connect(state => state)(App)