import { onSnake } from './js/snake.js'
import { randomGridPosition } from './js/grid.js'

let food = getRandomFoodPosition()
const EXPANTION_RATE = 2


export function update() {
    if (onSnake(food)) {
        espandSnake(EXPANTION_RATE)
        food = { x: 20, y: 10}
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    snakeElement.style.gridRowStart = food.y
    snakeElement.style.gridColumnStart = food.x
    snakeElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
}