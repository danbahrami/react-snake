import React from "react"
import styles from "../styles"

const {number, shape} = React.PropTypes

const Fruit = ({cell}) => {
    return cell ? (
        <div style={{
            ...styles.Cell.fruit,
            top  : cell.y * 10,
            left : cell.x * 10
        }}/>
    ) : <div/>
}

Fruit.propTypes = {
    cell : shape({
        x : number.isRequired,
        y : number.isRequired
    })
}

export default Fruit