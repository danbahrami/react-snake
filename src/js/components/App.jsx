import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../redux/actions"
import KeyboardListener from "./KeyboardListener.jsx"
import Ticker from "./Ticker.jsx"
import GameBoard from "./GameBoard.jsx"
import ScoreBoard from "./ScoreBoard.jsx"
import TopScoreTracker from "./TopScoreTracker.jsx"
import { getTickInterval } from "../utils.js"
import styles from "../styles"

class App extends Component {
    render() {
        const { level, gameStatus, points } = this.props
        const interval = getTickInterval(level)

        const instruction = (() => {
            switch(gameStatus) {
                case "NOT_STARTED" :
                    return "Hit space bar to start/pause"

                case "IN_PROGRESS" :
                    return "Use number keys to set level"

                case "PAUSED" :
                    return "Hit space bar to un-pause"

                case "GAME_LOST" :
                    return "Bad luck, hit space bar to start again"
            }
        })()

        return (
            <div style={styles.App}>
                <span style={styles.title}>React Snake</span>
                {gameStatus === "IN_PROGRESS" ? (
                    <Ticker interval={interval}/>
                ) : null}

                <KeyboardListener />
                <span style={styles.instruction}>{instruction}</span>
                <GameBoard />
                <ScoreBoard points={points} level={level}/>
                <TopScoreTracker />
            </div>
        )
    }
}

export default connect(state => state)(App)