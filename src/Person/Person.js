import React from "react";    //needed for interally react.createlement()

const person = (props) => { // in class use this.props and in function use props directly.
    return <p>{props.name}</p>
}

export default person