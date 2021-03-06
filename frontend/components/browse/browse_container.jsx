import React, { Component } from 'react'
import { connect } from 'react-redux'
import GenreIndexContainer from '../genres/genre_index'
import DocumentaryInfoAndWatchContainer from "../modals/documentary_info_and_watch";
import { Footer } from '../nav_bar/footer';


class Browse extends Component {

  componentDidMount() {
    // this.props.updateGenres();
    // this.props.selectWatchProfile();
  }
  render() {
    const stopScrolling = this.props.showingDocumentaryInfo ? ("of-init vh-100") : ("")
    
    const displayDocumentaryInfo = this.props.showingDocumentaryInfo ?
      (
        <DocumentaryInfoAndWatchContainer />
      ) : ""
      
    return (
      <div>
        {displayDocumentaryInfo}
        <div className={stopScrolling}>
          <GenreIndexContainer documentary={this.props.documentary}/>
          <Footer />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  showingDocumentaryInfo: state.ui.showDocumentaryInfo,
  // documentary: pickRandomDocumentary(state.entities.documentaries)
})

const mapDispatchToProps = (dispatch) => ({
  // selectWatchProfile: (userProfileFilters) => dispatch(updateUserProfileFilter(applyUserFilters, userProfileFilters))

})

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
