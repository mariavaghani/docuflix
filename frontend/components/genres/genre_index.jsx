import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDocumentary, fetchFeaturedDocumentary } from '../../actions/documentary_actions';
import { applyUserFilters, updateGenres, updateGenresFilter, updateUserProfileFilter } from "../../actions/filter_actions";
import { parseGenreIdsFromFetchedDocumentaries, pickRandomDocumentary } from '../../selectors/selectors';

import DocumentaryIndexContainer from '../documentaries/documentary_index';
import FeaturedDocumentaryContainer from '../documentaries/featured_documentary';
import MyListIndex from '../documentaries/my_list_index';

class GenreIndex extends Component {


  componentDidMount(){
    
    this.props.selectWatchProfile().then(() => this.props.fetchFeatureDocumentary(pickRandomDocumentary(this.props.documentaries).id))
  }

 

  render() {
    // if (!this.props.featuredDocumentary.id) return null;
    return (
    <div >
        <FeaturedDocumentaryContainer />
        <ul className="genres-index pad-10 pad-t-50">
  
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
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  documentaries: state.entities.documentaries,
  genres: Object.values(state.entities.genres),
  selectedProfile: state.session.selectedProfile,
  featuredDocumentary: state.entities.featuredDocumentary
})

const mapDispatchToProps = (dispatch) => ({
  selectWatchProfile: (userProfileFilters) => dispatch(updateUserProfileFilter(applyUserFilters, userProfileFilters)),
  fetchFeatureDocumentary: (id) => dispatch(fetchFeaturedDocumentary(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex)
