import React from "react"
import { connect } from "react-redux"
import * as actions from "../redux/actions"

class Ticker extends React.Component {
    componentDidMount() {
        this.interval = window.setInterval(::this.tick, 200)
    }
    
    componentWillUnmount() {
        window.clearInterval(this.interval)
    }
    
    tick() {
        this.props.dispatch(actions.tick())
    }
    
    render() {
        return <div />
    }
}

export default connect()(Ticker)