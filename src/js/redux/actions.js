import createAction from "./actionCreator"

export const keyboardUpArrow = createAction("KEYBOARD_UP_ARROW")
export const keyboardDownArrow = createAction("KEYBOARD_DOWN_ARROW")
export const keyboardLeftArrow = createAction("KEYBOARD_LEFT_ARROW")
export const keyboardRightArrow = createAction("KEYBOARD_RIGHT_ARROW")
export const keyboardSpaceBar = createAction("KEYBOARD_SPACE_BAR")
export const keyboardDigit = createAction("KEYBOARD_DIGIT")
export const initialiseBoard = createAction("INITIALISE_BOARD")
export const tick = createAction("TICK")