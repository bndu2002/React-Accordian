import React from "react";
import { questions } from "./api"
import MyAccordian from "./MyAccordian";
import "./accordian.css"

export default function Accordian() {

    return (
        <>
            <section className="main-div">
                <h1>React Interview Questions And Answers</h1>
                {questions.map((currElem) => {
                    let { id } = currElem
                    return <MyAccordian key={id} {...currElem} />
                })}

            </section>
        </>
    )
}