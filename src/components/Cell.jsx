import React from "react"
import styles from "../styles"

const {bool, number, shape} = React.PropTypes

const Cell = ({cell, isSnake, isFruit}) => {
    let style = styles.Cell

    if(isFruit) {
        style = styles.FruitCell
    }

    if(isSnake) {
        style = styles.SnakeCell
    }

    return (
        <div style={style}></div>
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