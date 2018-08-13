import React, { Component } from 'react'

class Movie extends Component {
  render() {
      const baseUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
    return (
      <li className="movie">
        <img src={baseUrl + this.props.image} />
        <section className="movieList">
          <h2>{this.props.name}</h2>
          <p>{this.props.overview}</p>
          <span>Popularity: {this.props.popularity}</span>
          <span>&nbsp;&nbsp;&nbsp;Release Date: {this.props.release_date}</span>
        </section>
      </li>
    )
  }
}

export default Movie