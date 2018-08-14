import React, { Component } from 'react'
import Movie from './Movie'
import movies from './movies.json'

class MoviesList extends Component {
  render() {
    return (
      <section>
        <ul className="MoviesList"> {movies.results.sort((a, b) => {
          if (a.release_date > b.release_date) {
            return 1
          }
          else if (a.release_date < b.release_date) {
            return -1
          }
          else {
            return 0
          }}).map((movie, idx) => {
            return <Movie name={movie.title} 
                    image={movie.poster_path}
                    overview={movie.overview}
                    popularity={movie.popularity}
                    release_date={movie.release_date} key={idx} />
        })}
        </ul>
      </section>
    )
  }
}

export default MoviesList