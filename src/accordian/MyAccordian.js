import React, { useState } from "react";
import "./accordian.css"

export default function MyAccordian({ question, answer }) {
    let [show, setShow] = useState(false)
    // let [sign, setSign] = useState("+")
    // function display() {
    //     if (show === true) {
    //         setShow(false)
    //         setSign("+")
    //     } else {
    //         setShow(true)
    //         setSign("-")
    //     }

    // }
    
    //sets the new value of the show state to the opposite of its current value (i.e., !show).

    return (
        <>
            <div className="main-heading">
                
                <p onClick={() => { setShow(!show) }}>{show ? "➖" : "➕"}</p>
                <h3>{question}</h3>

            </div>
            {show && <p className="answers">{answer}</p>}
        </>
    )
}