import React from 'react'

export default function Selector({ colors }) {

    let selectColors = Object.values(colors).slice(1, 10)

    return (
        <div className="selector">
            {selectColors.map((color, index) => {
                return (
                    <div 
                        style={{backgroundColor: color}} 
                        key={index} 
                        className="selector-grid">
                    </div>
                )
            })}
        </div>
    )
}
