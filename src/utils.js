export const createBoard = (pixelWidth, pixelHeight) => {
    let cells = []
    const width = Math.floor(pixelWidth / 10)
    const height = Math.floor(pixelHeight / 10)

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            cells.push({x, y})
        }
    }

    return {width, height, cells}
}

export const createSnake = (length, boardWidth, boardHeight) => {
    let snake = []

    let horizontalCenter = Math.floor(boardWidth / 2)
    let verticalCenter = Math.floor(boardHeight / 2)

    for (let x = horizontalCenter - length; x < horizontalCenter; x++) {
        snake.push(createCell(x, verticalCenter))
    }

    return snake
}

export const createFruit = (boardCells, snake) => {
    const freeCells = boardCells.filter((cell) => {
        return !isCellInArray(cell, snake)
    })

    return freeCells[getRandomInt(0, freeCells.length - 1)]
}

export const getNextSnake = (snake, snakeHead, hasJustEaten) => {
    let newSnake = [...snake]
    newSnake.push(snakeHead)

    if(!hasJustEaten) {
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
    if(isCellInArray(nextSnakeHead, snake)) {
        return true
    }

    if(nextSnakeHead.x < 0 || nextSnakeHead.x >= boardWidth) {
        return true
    }

    if(nextSnakeHead.y < 0 || nextSnakeHead.y >= boardHeight) {
        return true
    }
    
    return false
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

export function debounce(func, wait, immediate) {
    var timeout
    return function () {
        var context = this, args = arguments
        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}