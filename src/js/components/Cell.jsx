import React from "react"
import styles from "../styles"

const {bool, number, shape} = React.PropTypes

const Cell = ({isSnake, isFruit, gameStatus}) => {
    let style = styles.Cell

    if(isFruit) {
        style = styles.Cell.fruit
    }

    if(isSnake) {
        style = gameStatus === "GAME_LOST"
            ? styles.Cell.snake.dead
            : styles.Cell.snake
    }

    return (
        <div style={style}>
                
        </div>
    )
}

Cell.propTypes = {
    cell : shape({
        x : number,
        y : number
    }).isRequired,
    isSnake : bool
}

export default Cell