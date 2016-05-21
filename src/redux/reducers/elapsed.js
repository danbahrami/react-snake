import createReducer from "../reducerCreator"
import initialState from "../initialState"

export default createReducer({
    "TICK" : (state) => state + 1
}, initialState.elapsed)