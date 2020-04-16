import React from 'react'

export default function Selector({ colors, selectColor }) {

    let selector = Object.values(colors).slice(1, 10)

    return (
        <div className="selector">
            {selector.map((color, index) => {
                return (
                    <div 
                        style={{backgroundColor: color}} 
                        key={index} 
                        className="selector-grid"
                        onClick={() => selectColor(index)}>
                    </div>
                )
            })}
        </div>
    )
}