import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import reducer from "./redux/reducer"
import App from "./components/App.jsx"
import initialState from "./redux/initialState"

const store = createStore(
    reducer,
    initialState,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)