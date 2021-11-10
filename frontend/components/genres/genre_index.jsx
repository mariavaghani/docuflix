import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyUserFilters, updateGenres, updateGenresFilter, updateUserProfileFilter } from "../../actions/filter_actions";
import { parseGenreIdsFromFetchedDocumentaries } from '../../selectors/selectors';

import DocumentaryIndexContainer from '../documentaries/documentary_index';
import MyListIndex from '../documentaries/my_list_index';

class GenreIndex extends Component {


  componentDidMount(){
    // this.props.updateGenres();
    this.props.selectWatchProfile();
  }

 

  render() {
    return (
      <ul className="genres-index fixed-nav">
        <li key="my list">
          <h4>
            My List
          </h4>
          <MyListIndex />
        </li>
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
  genres: Object.values(state.entities.genres),
  selectedProfile: state.session.selectedProfile
})

const mapDispatchToProps = (dispatch) => ({
  selectWatchProfile: (userProfileFilters) => dispatch(updateUserProfileFilter(applyUserFilters, userProfileFilters))

})

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex)
