import React, { Component } from 'react'
import Grid from './components/Grid'
import Header from './components/Header'
import Selector from './components/Selector'
import Buttons from './components/Buttons'

import './App.css';

export default class App extends Component {

  state = {
    boxes: [
      [4, 0, 0, 0, 5, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 7, 0, 0],
      [8, 0, 5, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 8, 0, 0, 1, 0],
      [0, 6, 0, 4, 0, 0, 0, 0, 0],
      [0, 0, 0, 5, 0, 0, 1, 0, 4],
      [6, 0, 3, 2, 0, 0, 0, 0, 0],
      [0, 7, 0, 0, 0, 0, 0, 0, 0]
    ],

    solved: [
      [4, 1, 7, 6, 3, 2, 9, 5, 8],
      [3, 6, 9, 1, 5, 8, 7, 2, 4],
      [8, 2, 5, 9, 4, 7, 3, 1, 6],
      [8, 2, 5, 7, 9, 1, 3, 4, 6],
      [4, 3, 7, 5, 8, 6, 9, 1, 2],
      [1, 6, 9, 4, 3, 2, 7, 5, 8],
      [2, 8, 9, 5, 7, 3, 1, 6, 4],
      [6, 4, 3, 2, 9, 1, 8, 7, 5],
      [5, 7, 1, 6, 8, 4, 2, 9, 3]
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
  }

  assignColor = (gridIndex, boxIndex, selectedColor) => {
    const { boxes } = this.state
    let newBoxes = boxes.map((box, index) => {
      if(index === boxIndex) {
        return box.map((grid, colorCode) => {
          if(colorCode === gridIndex && !box.includes(selectedColor)) {
            return selectedColor
          }
          else {
            return grid
          }
        })
      }
      return box
    })
    
    this.setState({
      boxes: newBoxes
    })
  }
  
  solve = () => {
    this.setState({
      boxes: this.state.solved
    })
  }

  clear = () => {
    const { boxes } = this.state
    let clearBoxes = boxes.map(box => box.map(grid => grid = 0))

    this.setState({
      boxes: clearBoxes
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
      <Buttons solve={this.solve} clear={this.clear}/>
    </div>
    )
  }
}