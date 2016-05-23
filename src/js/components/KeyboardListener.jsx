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
        if(event.code.indexOf("Digit") !== -1) {
            const digit = parseInt(event.code[event.code.length - 1])
            this.props.dispatch(actions.keyboardDigit(digit))
            return
        }

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