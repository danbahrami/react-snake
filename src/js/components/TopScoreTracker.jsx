import React from "react"
import { connect } from "react-redux"
import { getCookie, setCookie } from "../cookieControl"

const {number} = React.PropTypes

class TopScoreTracker extends React.Component {
    componentDidMount() {
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
            <div>
                <span>Top Score : {this.topScore}</span>
            </div>
        )
    }
}

export default connect(state => state)(TopScoreTracker)