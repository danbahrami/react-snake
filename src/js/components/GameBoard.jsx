import React from "react"
import { connect } from "react-redux"
import { isCellInArray, isCell } from "../utils"
import Snake from "./Snake.jsx"
import * as actions from "../redux/actions"
import styles from "../styles"

class GameBoard extends React.Component {
    componentDidMount() {
        ::this.initialiseBoard()
    }

    initialiseBoard() {
        this.props.dispatch(actions.initialiseBoard({
            width  : this.refs.container.clientWidth,
            height : this.refs.container.clientHeight
        }))
    }
    
    getCells() {
        const {board : {width, height}} = this.props

        let cells = []

        while(cells.length < width * height) {
            cells.push(width * height)
        }

        return cells
    }

    render() {
        const {board : {width, height}} = this.props
        const cells = ::this.getCells()

        return (
            <div ref="container" style={styles.GameBoard}>
                {cells.map((cell) => (
                    <div style={styles.Cell} />
                ))}
                <Snake snake={this.props.snake}/>
            </div>
        )
    }
}

export default connect(state => state)(GameBoard)