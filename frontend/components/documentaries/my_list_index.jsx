import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfileWatchList } from '../../actions/watch_lists_actions';
import { getDocumentariesFromWatchList, selectDocumentariesByGenre } from '../../selectors/selectors';
import { DocumentaryIndexItem } from './documentary_index_item';

class MyListIndex extends Component {


  render() {
    console.log(`this.props: `, this.props);
    
    return (
      <ul className="docu-carusel">
        {
          this.props.documentaries.map(documentary => {
            return (<DocumentaryIndexItem key={documentary.id}
              documentary={documentary}
            />)
          })
        }
      </ul>
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
