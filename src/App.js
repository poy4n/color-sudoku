import React, { Component } from 'react'
import Grid from './components/Grid'
import Header from './components/Header'
import Selector from './components/Selector'

import './App.css';

export default class App extends Component {

  state = {
    boxes: [
      [8, 0, 0, 4, 0, 6, 0, 0, 7],
      [0, 0, 0, 0, 0, 0, 4, 0, 0],
      [0, 1, 0, 0, 0, 0, 6, 5, 0],
      [5, 0, 0, 0, 3, 0, 7, 0, 0],
      [0, 0, 0, 0, 7, 0, 0, 0, 0],
      [0, 4, 8, 0, 2, 0, 1, 0, 3],
      [0, 5, 2, 0, 0, 0, 0, 9, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 9, 0, 2, 0, 0, 5]
    ],

    colors: {
      0: '#FAFAFA',
      1: '#D1C4E9',
      2: '#E57373',
      3: '#A5D6A7',
      4: '#90CAF9',
      5: '#F6DDCC',
      6: '#B2EBF2',
      7: '#FFD54F',
      8: '#E0E0E0',
      9: '#F8BBD0'
    },

    selectedColor: null
  }

  gridColor = (colorCode) => {
    return {
      backgroundColor: this.state.colors[colorCode]
    }
  }

  selectColor = (code) => {
    let colors = Object.keys(this.state.colors).slice(1, 10)
    let selectedColor = colors.filter((col, index) => index === code)[0]
    this.setState({
      selectedColor : Number(selectedColor)
    })
    console.log(this.state.selectedColor)
  }

  assignColor = (gridIndex, boxIndex, selectedColor) => {
    console.log(gridIndex, boxIndex, selectedColor)
    const { boxes } = this.state
    console.log(boxes[boxIndex][gridIndex])

    let newBoxes = boxes.map((box, index) => {
      if(index === boxIndex) {
        return box.map((grid, colorCode) => {
          if(colorCode === gridIndex) {
            return selectedColor
          }
          else {
            return grid
          }
        })
      }
      return box
    })

    console.log(newBoxes)
    console.log(boxes)

    this.setState({
      boxes: newBoxes
    })
  }
  
  render() {

    const { boxes, colors, selectedColor } = this.state

    return (
      <div className="body">
      <Header colors={colors}/>
      <Grid 
        boxes={boxes} 
        colors={colors} 
        gridColor={this.gridColor} 
        selectedColor={selectedColor} 
        assignColor={this.assignColor}
      />
      <Selector 
        colors={colors} 
        selectColor={this.selectColor}
      />
    </div>
    )
  }
}