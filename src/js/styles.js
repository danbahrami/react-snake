const Cell = {
    width  : 8,
    height : 8,
    border : "1px solid #BBBBBB",
    float: "left",
    boxSizing : "content-box"
}

export default {
    App       : {
        position : "absolute",
        width  : "100%",
        height : "100%",
        background : "#CCCCCC",
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    },
    GameBoard : {
        width      : "200px",
        height     : "200px",
        marginBottom : "15px"
    },
    Cell : {
        ...Cell,
        fruit : {
            ...Cell,
            background: "red"
        },
        snake : {
            ...Cell,
            background: "#333333",
            dead : {
                ...Cell,
                background: "red"
            }
        }
    },
    ScoreBoard : {
        width : "200px",
        marginBottom : "15px",
        points : {
            float : "left"
        },
        level : {
            float : "right"
        }
    },
    title : {
        display : "block",
        fontSize : "30px",
        fontWeight : "bold",
        marginTop : "30px",
        marginBottom : "8px"
    },
    instruction : {
        fontSize : "12px",
        marginBottom : "15px"
    }
}