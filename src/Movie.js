import React, { Component } from 'react'

class Movie extends Component {
  render() {
      const baseUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
    return (
      <li className="movie">
        <h2>{this.props.name}</h2>
        <img src={baseUrl + this.props.image} />
        <p>{this.props.overview}</p>
      </li>
    )
  }
}

export default Movie