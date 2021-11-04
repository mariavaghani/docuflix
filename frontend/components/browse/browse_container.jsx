import React, { Component } from 'react'
import { connect } from 'react-redux'
import GenreIndexContainer from '../genres/genre_index'
import DocumentaryInfoAndWatchContainer from "../modals/documentary_info_and_watch";


class Browse extends Component {
  render() {
    console.log('browse re-rendering');
    console.log(`this.props.showingDocumentaryInfo: `, this.props.showingDocumentaryInfo);
    
    
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
