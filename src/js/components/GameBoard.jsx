import React from "react"
import { connect } from "react-redux"
import { isCellInArray, isCell } from "../utils"
import Cell from "./Cell.jsx"
import * as actions from "../redux/actions"
import styles from "../styles"

class GameBoard extends React.Component {
    componentDidMount() {
        ::this.initialiseBoard()
    }
    
    initialiseBoard() {
        this.props.dispatch(actions.initialiseBoard({
            width : this.refs.container.clientWidth,
            height : this.refs.container.clientHeight
        }))
    }
    
    render() {
        const {board, fruit, gameStatus, snake} = this.props

        return (
            <div ref="container" style={styles.GameBoard}>
                {board.cells.map((cell, index) => {
                    return (
                        <Cell
                            cell={cell}
                            isSnake={isCellInArray(cell, snake)}
                            isFruit={isCell(cell, fruit)}
                            gameStatus={gameStatus}
                            key={index}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(state => state)(GameBoard)