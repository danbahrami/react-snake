export default (handlers = {}, initialState) => {
    return (state = initialState, action) => {
        return (action && handlers[action.type])
            ? handlers[action.type](state, action.payload)
            : state
    }
}