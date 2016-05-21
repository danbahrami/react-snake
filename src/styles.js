const Cell = {
    width  : 8,
    height : 8,
    border : "1px solid #BBBBBB",
    float: "left"
}

export default {
    App       : {
        width  : "100%",
        height : "100%"
    },
    GameBoard : {
        width      : "100%",
        height     : "100%",
        background : "#CCCCCC"
    },
    Cell,
    SnakeCell : {
        ...Cell,
        background: "#333333"
    },
    FruitCell : {
        ...Cell,
        background: "red"
    }
}