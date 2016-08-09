import React from "react"
import styles from "../styles"

const {number} = React.PropTypes

const ScoreBoard = ({points, level}) => {
    return (
        <div style={styles.ScoreBoard}>
            <span style={styles.ScoreBoard.points}>points: {points}</span>
            <span style={styles.ScoreBoard.level}>level: {level}</span>
        </div>
    )
}

ScoreBoard.propTypes = {
    level      : number.isRequired,
    points     : number.isRequired
}

export default ScoreBoard