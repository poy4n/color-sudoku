import React from 'react'

export default function Grid({ box, gridColor }) {
    
    return (
        <div className="board">
            {box.map((array, index) => {
                return (
                    <div key={index} className="box">
                        {array.map((num, ind) => {
                            return (
                                <div style={gridColor(num)} key={ind} className="grid">
                                    <h2>{num}</h2>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}