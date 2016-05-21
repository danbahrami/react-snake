import React from "react"
import { connect } from "react-redux"
import * as actions from "../redux/actions"

class KeyboardListener extends React.Component {
    componentDidMount() {
        window.addEventListener("keydown", ::this.dispatchKeyboardActions)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", ::this.dispatchKeyboardActions)
    }

    dispatchKeyboardActions(event) {
        switch (event.code) {
            case "ArrowUp" :
                this.props.dispatch(actions.keyboardUpArrow())
                break

            case "ArrowDown" :
                this.props.dispatch(actions.keyboardDownArrow())
                break

            case "ArrowLeft" :
                this.props.dispatch(actions.keyboardLeftArrow())
                break

            case "ArrowRight" :
                this.props.dispatch(actions.keyboardRightArrow())
                break

            case "Space" :
                this.props.dispatch(actions.keyboardSpaceBar())
                break
        }
    }

    render() {
        return <div />
    }
}

export default connect()(KeyboardListener)