import React from "react"
import { connect } from "react-redux"
import { debounce, isCellInArray, isCell } from "../utils"
import Cell from "./Cell.jsx"
import * as actions from "../redux/actions"
import styles from "../styles"

class GameBoard extends React.Component {
    componentDidMount() {
        ::this.dispatchInitialiseBoard()
        this.setBoardDimensions = debounce(::this.dispatchNewBoardDimensions, 250)
        window.addEventListener("resize", this.setBoardDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setBoardDimensions)
    }

    dispatchNewBoardDimensions() {
        this.props.dispatch(actions.setBoardDimensions({
            width : window.innerWidth,
            height : window.innerHeight
        }))
    }
    
    dispatchInitialiseBoard() {
        this.props.dispatch(actions.initialiseBoard({
            width : window.innerWidth,
            height : window.innerHeight
        }))
    }
    
    render() {
        return (
            <div style={styles.GameBoard}>
                {this.props.board.cells.map((cell, index) => {
                    return (
                        <Cell
                            cell={cell}
                            isSnake={isCellInArray(cell, this.props.snake)}
                            isFruit={isCell(cell, this.props.fruit)}
                            key={index}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(state => state)(GameBoard)