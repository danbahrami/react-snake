import React from "react"
import { connect } from "react-redux"
import CellGrid from "./CellGrid.jsx"
import Snake from "./Snake.jsx"
import Fruit from "./Fruit.jsx"
import * as actions from "../redux/actions"
import styles from "../styles"

class GameBoard extends React.Component {
    componentWillMount() {
        this.props.dispatch(actions.initialiseBoard())
    }

    render() {
        const {fruit, gameStatus, snake} = this.props

        return (
            <div style={styles.GameBoard}>
                <CellGrid width={20} height={20}/>
                <Fruit cell={fruit}/>
                <Snake snake={snake} isDead={gameStatus === "GAME_LOST"}/>
            </div>
        )
    }
}

export default connect(state => ({
    board      : state.board,
    fruit      : state.fruit,
    snake      : state.snake,
    gameStatus : state.gameStatus
}))(GameBoard)