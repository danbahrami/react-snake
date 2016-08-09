import createReducer from "./reducerCreator"
import initialState from "./initialState"
import {
    createSnake,
    createFruit,
    getNextSnake,
    getNextSnakeHead,
    isGameOver,
    isCell,
    getNextDirection
} from "../utils"

const setupNewGame = (state) => {
    const width = 20
    const height = 20
    const snake = createSnake(5, width, height)
    const fruit = createFruit(width, height, snake)

    return {
        ...state,
        direction     : "RIGHT",
        nextDirection : "RIGHT",
        gameStatus    : "NOT_STARTED",
        board         : {width, height},
        elapsed       : 0,
        points        : 0,
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
    "KEYBOARD_DIGIT"       : (state, payload) => {
        return {
            ...state,
            level : payload === 0 ? 10 : payload
        }
    },
    "TICK"                 : (state) => {
        let snake = [...state.snake]
        let fruit = state.fruit
        let points = state.points

        const snakeHead = getNextSnakeHead(state.snake, state.direction)
        const isGameLost = isGameOver(snakeHead, state.snake, state.board.width, state.board.height)

        if (!isGameLost) {
            const hasJustEaten = isCell(snakeHead, fruit)
            snake = getNextSnake(state.snake, snakeHead, hasJustEaten)
            fruit = hasJustEaten ? createFruit(state.board.width, state.board.height, snake) : state.fruit
            points = hasJustEaten ? points + state.level : points
        }

        return {
            ...state,
            elapsed    : state.elapsed + 1,
            gameStatus : isGameLost ? "GAME_LOST" : "IN_PROGRESS",
            direction  : state.nextDirection,
            fruit,
            points,
            snake
        }
    },
    "INITIALISE_BOARD"     : (state) => {
        return setupNewGame(state)
    }
}, initialState)