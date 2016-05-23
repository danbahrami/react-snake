import createReducer from "./reducerCreator"
import initialState from "./initialState"
import {
    createBoard,
    createSnake,
    createFruit,
    getNextSnake,
    getNextSnakeHead,
    isGameOver,
    isCell,
    getNextDirection
} from "../utils"

const setupNewGame = (state, width, height) => {
    const board = createBoard(width, height)
    const snake = createSnake(5, board.width, board.height)
    const fruit = createFruit(board.cells, snake)

    return {
        ...state,
        direction : "RIGHT",
        nextDirection : "RIGHT",
        gameStatus : "NOT_STARTED",
        elapsed : 0,
        points : 0,
        board,
        fruit,
        snake
    }
}

export default createReducer({
    "KEYBOARD_UP_ARROW"    : (state) => {
        return {
            ...state,
            nextDirection : getNextDirection(state.direction, "UP", state.gameStatus)
        }
    },
    "KEYBOARD_DOWN_ARROW"  : (state) => {
        return {
            ...state,
            nextDirection : getNextDirection(state.direction, "DOWN", state.gameStatus)
        }
    },
    "KEYBOARD_LEFT_ARROW"  : (state) => {
        return {
            ...state,
            nextDirection : getNextDirection(state.direction, "LEFT", state.gameStatus)
        }
    },
    "KEYBOARD_RIGHT_ARROW" : (state) => {
        return {
            ...state,
            nextDirection : getNextDirection(state.direction, "RIGHT", state.gameStatus)
        }
    },
    "KEYBOARD_SPACE_BAR"   : (state) => {
        switch (state.gameStatus) {
            case "IN_PROGRESS" :
                return {
                    ...state,
                    gameStatus : "PAUSED"
                }

            case "GAME_LOST" :
                return setupNewGame(state, state.board.width, state.board.height)

            default :
                return {
                    ...state,
                    gameStatus : "IN_PROGRESS"
                }
        }
    },
    "KEYBOARD_DIGIT" : (state, payload) => {
        return {
            ...state,
            level : payload === 0 ? 10 : payload
        }
    },
    "TICK"                 : (state) => {
        let snake = [...state.snake]
        let fruit = {...state.fruit}
        let points = state.points

        const snakeHead = getNextSnakeHead(state.snake, state.direction)
        const isGameLost = isGameOver(snakeHead, state.snake, state.board.width, state.board.height)

        if (!isGameLost) {
            const hasJustEaten = isCell(snakeHead, fruit)
            snake = getNextSnake(state.snake, snakeHead, hasJustEaten)
            fruit = hasJustEaten ? createFruit(state.board.cells, snake) : state.fruit
            points = hasJustEaten ? points + state.level : points
        }

        return {
            ...state,
            elapsed : state.elapsed + 1,
            gameStatus : isGameLost ? "GAME_LOST" : "IN_PROGRESS",
            direction : state.nextDirection,
            fruit,
            points,
            snake
        }
    },
    "INITIALISE_BOARD"     : (state, payload) => {
        const {width, height} = payload

        return setupNewGame(state, Math.floor(width / 10), Math.floor(height / 10))
    },
    "SET_BOARD_DIMENSIONS" : (state, payload) => {
        return {
            ...state,
            board : createBoard(payload.width, payload.height)
        }
    }
}, initialState)