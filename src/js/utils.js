export const createSnake = (length, boardWidth, boardHeight) => {
    let snake = []

    let horizontalCenter = Math.floor(boardWidth / 2)
    let verticalCenter = Math.floor(boardHeight / 2)

    for (let x = horizontalCenter - length; x < horizontalCenter; x++) {
        snake.push(createCell(x, verticalCenter))
    }

    return snake
}

export const createFruit = (boardWidth, boardHeight, snake) => {
    let cells = []

    for (let y = 0; y < boardHeight; y++) {
        for (let x = 0; x < boardWidth; x++) {
            const cell = createCell(x, y)

            if(!isCellInArray(cell, snake)) {
                cells.push(cell)
            }
        }
    }

    return cells[getRandomInt(0, cells.length - 1)]
}

export const getNextSnake = (snake, snakeHead, hasJustEaten) => {
    let newSnake = [...snake]
    newSnake.push(snakeHead)

    if (!hasJustEaten) {
        newSnake.shift()
    }

    return newSnake
}

export const getNextSnakeHead = (snake, direction) => {
    const snakeHead = snake[snake.length - 1]

    const xMod = direction === "RIGHT" ? 1 : direction === "LEFT" ? -1 : 0
    const yMod = direction === "DOWN" ? 1 : direction === "UP" ? -1 : 0

    return {
        x : snakeHead.x + xMod,
        y : snakeHead.y + yMod
    }
}

export const isGameOver = (nextSnakeHead, snake, boardWidth, boardHeight) => {
    if (isCellInArray(nextSnakeHead, snake)) {
        return true
    }

    if (nextSnakeHead.x < 0 || nextSnakeHead.x >= boardWidth) {
        return true
    }

    if (nextSnakeHead.y < 0 || nextSnakeHead.y >= boardHeight) {
        return true
    }

    return false
}

export const getNextDirection = (current, next, gameStatus) => {
    if (gameStatus !== "IN_PROGRESS") {
        return current
    }

    const oppositeDirections = {
        "UP"    : "DOWN",
        "DOWN"  : "UP",
        "LEFT"  : "RIGHT",
        "RIGHT" : "LEFT"
    }

    return oppositeDirections[next] === current ? current : next
}

export const getTickInterval = (level) => {
    return 340 - (level * 30)
}

export const isCell = (cell1, cell2) => {
    return cell1.x === cell2.x && cell1.y === cell2.y
}

export const isCellInArray = (cell, array) => {
    return !!array.find((item) => item.x === cell.x && item.y === cell.y)
}

export const createCell = (x, y) => {
    return {x, y}
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}