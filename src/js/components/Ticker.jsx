import React from "react"
import { connect } from "react-redux"
import * as actions from "../redux/actions"

const { number } = React.PropTypes

class Ticker extends React.Component {
    componentDidMount() {
        this.ticker = window.setInterval(::this.tick, this.props.interval)
    }
    
    componentWillUnmount() {
        window.clearInterval(this.ticker)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.interval !== this.props.interval) {
            window.clearInterval(this.ticker)
            this.ticker = window.setInterval(::this.tick, nextProps.interval)
        }
    }
    
    tick() {
        this.props.dispatch(actions.tick())
    }
    
    render() {
        return <div />
    }
}

Ticker.propTypes = {
    interval : number.isRequired
}

export default connect()(Ticker)