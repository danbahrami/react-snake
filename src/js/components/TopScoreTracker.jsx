import React from "react"
import { connect } from "react-redux"
import { getCookie, setCookie } from "../cookieControl"

class TopScoreTracker extends React.Component {
    constructor(props) {
        super(props)
        this.topScore = ::this.getCookie()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.points > this.topScore) {
            setCookie("TOP_SCORE", nextProps.points)
            this.topScore = nextProps.points
        }
    }

    getCookie() {
        return getCookie("TOP_SCORE") || 0
    }

    render() {
        return (
            <div>Top Score : {this.topScore}</div>
        )
    }
}

export default connect(state => state)(TopScoreTracker)