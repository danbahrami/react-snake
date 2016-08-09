import React from "react"
import styles from "../styles"

const {number} = React.PropTypes

class CellGrid extends React.Component {
    shouldComponentUpdate(nextProps) {
        return false
    }

    getCells() {
        const {width, height} = this.props

        let cells = []

        while(cells.length < width * height) {
            cells.push(width * height)
        }

        return cells
    }

    render() {
        const cells = ::this.getCells()

        return (
            <div>
                {cells.map((cell, index) => (
                    <div key={index} style={styles.Cell} />
                ))}
            </div>
        )
    }
}

CellGrid.propTypes = {
    width  : number.isRequired,
    height : number.isRequired
}

export default CellGrid