"use client"
import { useState } from "react"
import style from "./page.module.scss"

export default function Shop() {
    const [count, setCount] = useState(0)
    console.log(count)

    const [list, setList] = useState([
        {
            name: "apple",
            quantity: 1
        },
        {
            name: "orange",
            quantity: 5
        }
    ])


    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click Me</button>

            <div className="container">
                {
                    list.map((fruit) => (
                        <div>
                            {fruit.name}
                            {fruit.quantity}
                        </div>
                    ))
                }
            </div>






        </>
    )
}