import React, { Component } from 'react'
import { connect } from 'react-redux'
import GenreIndexContainer from '../genres/genre_index'
import DocumentaryInfoAndWatchContainer from "../modals/documentary_info_and_watch";


class Browse extends Component {
  render() {
    
    
    const displayDocumentaryInfo = this.props.showingDocumentaryInfo ?
      (
        <DocumentaryInfoAndWatchContainer />
      ) : ""
    return (
      <div>
        {displayDocumentaryInfo}
        <GenreIndexContainer />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  showingDocumentaryInfo: state.ui.showDocumentaryInfo
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
