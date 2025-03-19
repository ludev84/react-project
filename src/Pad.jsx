import React from "react"

export default function Pad({ color, on, onClickHandle, id }) {
    return (
        <button
            onClick={() => onClickHandle(id)}
            className={on ? "on" : undefined}
            style={{ backgroundColor: color }}
        ></button>
    )
}