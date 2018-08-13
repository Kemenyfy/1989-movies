import React, { Component } from 'react'
import MoviesList from './MoviesList'

class App extends Component {
  render() {
    const title = '1989 Most Popular Movies'
    return (
      <div className="App">
        <header>
          <h1>{title}</h1>
          <MoviesList />
        </header>
      </div>
    )
  }
}

export default App
