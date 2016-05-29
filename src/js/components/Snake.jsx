import React from "react"
import styles from "../styles"

const {} = React.PropTypes;

const Snake = ({snake}) => {
    return (
        <div>
            {snake.map((cell) => (
                <div style={{
                    ...styles.Cell.snake,
                    top : cell.y * 10,
                    left : cell.x * 10
                }}></div>
            ))}
        </div>
    )
}

Snake.propTypes = {

}

export default Snake