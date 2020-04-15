import React, { Component } from 'react'
import Grid from './components/Grid'
import Header from './components/Header'
import Selector from './components/Selector'


import './App.css';

export default class App extends Component {

  state = {
    box: [
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
    }
  }

  gridColor = (num) => {
    return {
      backgroundColor: this.state.colors[num]
    }
  }

  render() {

    const { box, colors } = this.state

    return (
      <div className="body">
      <Header colors={colors}/>
      <Grid box={box} colors={colors} gridColor={this.gridColor}/>
      <Selector colors={colors}/>
    </div>
    )
  }
}