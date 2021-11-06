import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateGenres, updateGenresFilter } from "../../actions/filter_actions";

import DocumentaryIndexContainer from '../documentaries/documentary_index';

class GenreIndex extends Component {

  componentDidMount(){
    this.props.updateGenres();
  }

  render() {
    return (
      <ul className="genres-index fixed-nav">
        {
        this.props.genres.map(genre => {
          return (
            <li key={genre.id}>
              <h4>
                {genre.genre}
              </h4>
              <DocumentaryIndexContainer genreId={genre.id} />
            </li>
          )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  genres: Object.values(state.entities.genres)
})

const mapDispatchToProps = (dispatch) => ({
  updateGenres: (genresToFetch) => dispatch(updateGenresFilter(updateGenres, genresToFetch)),
  

})

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex)
