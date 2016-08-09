import React from "react"
import styles from "../styles"

const {arrayOf, bool, number, shape} = React.PropTypes

const Snake = ({snake, isDead}) => {
    let style = styles.Cell.snake

    if(isDead) {
        style = {
            ...style,
            ...styles.Cell.snake.dead
        }
    }

    return (
        <div>
            {snake.map((cell, index) => (
                <div key={index} style={{
                    ...style,
                    top  : cell.y * 10,
                    left : cell.x * 10
                }}/>
            ))}
        </div>
    )
}

Snake.propTypes = {
    isDead : bool,
    snake  : arrayOf(shape({
        x : number,
        y : number
    }))
}

export default Snake