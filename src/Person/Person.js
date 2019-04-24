import React from "react";    //needed for interally react.createlement()
import "./Person.css";

const person = (props) => { // in class use this.props and in function use props directly.
    return (
    <div className="Person">
        <p onClick={props.click}>{props.name}</p>
        <p >
            {props.children}
        </p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
}

export default person