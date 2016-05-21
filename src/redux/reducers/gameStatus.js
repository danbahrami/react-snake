import createReducer from "../reducerCreator"
import initialState from "../initialState"

export default createReducer({
    "KEYBOARD_SPACE_BAR" : (state) => {
        return state === "IN_PROGRESS" ? "PAUSED" : "IN_PROGRESS"
    }
}, initialState.gameStatus)