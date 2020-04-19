import React from 'react'

export default function Buttons({solve, clear}) {
    return (
        <div className="button-container">
            <button onClick={solve}>Solve it</button>
            <button onClick={clear}>Clear it</button>
        </div>
    )
}
