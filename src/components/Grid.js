import React from 'react'

export default function Grid({ boxes, gridColor, selectedColor, assignColor }) {
    return (
        <div className="board">
            {boxes.map((array, boxIndex) => {
                return (
                    <div key={boxIndex} className="box">
                        {array.map((colorCode, gridIndex) => {
                            return (
                                <div 
                                    style={gridColor(colorCode)} 
                                    key={gridIndex} 
                                    className="grid" 
                                    onClick={() => assignColor(gridIndex, boxIndex, selectedColor)}>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}