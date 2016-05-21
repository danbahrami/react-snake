import createReducer from "./reducerCreator"
import initialState from "./initialState"
import { createBoard, createSnake, createFruit, getNextSnake, getNextSnakeHead, isCell } from "../utils"

export default createReducer({
    "KEYBOARD_UP_ARROW"    : (state) => {
        return {
            ...state,
            direction : state.gameStatus === "IN_PROGRESS" ? "UP" : state.direction
        }
    },
    "KEYBOARD_DOWN_ARROW"  : (state) => {
        return {
            ...state,
            direction : state.gameStatus === "IN_PROGRESS" ? "DOWN" : state.direction
        }
    },
    "KEYBOARD_LEFT_ARROW"  : (state) => {
        return {
            ...state,
            direction : state.gameStatus === "IN_PROGRESS" ? "LEFT" : state.direction
        }
    },
    "KEYBOARD_RIGHT_ARROW" : (state) => {
        return {
            ...state,
            direction : state.gameStatus === "IN_PROGRESS" ? "RIGHT" : state.direction
        }
    },
    "KEYBOARD_SPACE_BAR"   : (state) => {
        return {
            ...state,
            gameStatus : state.gameStatus === "IN_PROGRESS" ? "PAUSED" : "IN_PROGRESS"
        }
    },
    "TICK"                 : (state) => {
        const snakeHead = getNextSnakeHead(state.snake, state.direction)
        const hasJustEaten = isCell(snakeHead, state.fruit)
        const snake = getNextSnake(state.snake, snakeHead, hasJustEaten)

        return {
            ...state,
            elapsed : state.elapsed + 1,
            fruit   : hasJustEaten ? createFruit(state.board.cells, snake) : state.fruit,
            snake
        }
    },
    "INITIALISE_BOARD"     : (state, payload) => {
        const board = createBoard(payload.width, payload.height)
        const snake = createSnake(5, board.width, board.height)
        const fruit = createFruit(board.cells, snake)

        return {
            ...state,
            board,
            fruit,
            snake
        }
    },
    "SET_BOARD_DIMENSIONS" : (state, payload) => {
        return {
            ...state,
            board : createBoard(payload.width, payload.height)
        }
    }
}, initialState)