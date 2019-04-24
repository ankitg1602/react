import React from "react";    //needed for interally react.createlement()

const person = (props) => { // in class use this.props and in function use props directly.
    return (
    <div>
        <p onClick={props.click}>{props.name}</p>
        <p >
            {props.children}
        </p>
    </div>
  )
}

export default person