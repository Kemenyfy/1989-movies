import React, { Component } from 'react'
import Movie from './Movie'
import movies from './movies.json'

class MoviesList extends Component {
  render() {
    return (
      <section className="MoviesList">
        <ul>
          {movies.results.map((movie, idx) => {
            return <Movie name={movie.title} image={movie.poster_path} overview={movie.overview} popularity={movie.popularity} release_date={movie.release_date} key={idx} />
          })}
        </ul>
      </section>
    )
  }
}

export default MoviesList