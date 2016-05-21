import createAction from "./actionCreator"

export const keyboardUpArrow = createAction("KEYBOARD_UP_ARROW")
export const keyboardDownArrow = createAction("KEYBOARD_DOWN_ARROW")
export const keyboardLeftArrow = createAction("KEYBOARD_LEFT_ARROW")
export const keyboardRightArrow = createAction("KEYBOARD_RIGHT_ARROW")
export const keyboardSpaceBar = createAction("KEYBOARD_SPACE_BAR")

export const tick = createAction("TICK")

export const initialiseBoard = createAction("INITIALISE_BOARD")
export const setBoardDimensions = createAction("SET_BOARD_DIMENSIONS")