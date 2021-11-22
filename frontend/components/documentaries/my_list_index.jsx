import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfileWatchList } from '../../actions/watch_lists_actions';
import { getDocumentariesFromWatchList, selectDocumentariesByGenre } from '../../selectors/selectors';
import { DocumentaryIndex } from './documentary_index';
import { DocumentaryIndexItem } from './documentary_index_item';

class MyListIndex extends Component {


  render() {
    
    return (
      <DocumentaryIndex documentaries={this.props.documentaries}/>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    documentaries: getDocumentariesFromWatchList(state.entities.documentaries, state.entities.watchLists),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MyListIndex)
