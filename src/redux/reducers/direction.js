import createReducer from "../reducerCreator"
import initialState from "../initialState"

export default createReducer({
    "KEYBOARD_UP_ARROW" : () => "UP",
    "KEYBOARD_DOWN_ARROW" : () => "DOWN",
    "KEYBOARD_LEFT_ARROW" : () => "LEFT",
    "KEYBOARD_RIGHT_ARROW" : () => "RIGHT"
}, initialState.direction)