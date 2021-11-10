import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfileWatchList } from '../../actions/watch_lists_actions';
import { selectDocumentariesByGenre } from '../../selectors/selectors';
import { DocumentaryIndexItem } from './documentary_index_item';

class MyListIndex extends Component {

  componentDidMount() {
    // this.props.fetchProfileWatchList(this.props.selectedProfile)
  }

  render() {
    console.log(`this.props: `, this.props);
    
    return (
      <ul className="docu-carusel">
        {
          // this.props.documentaries.map(documentary => {
          //   return (<DocumentaryIndexItem key={documentary.id}
          //     documentary={documentary}
          //   />)
          // })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    selectedProfile: state.session.selectedProfile
    // documentaries: selectDocumentariesByProfileId(state.entities.documentaries, state.session.selectedProfile),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  // fetchMyListDocumentariesIdByProfileId: (profileId) => dispatch()
  fetchProfileWatchList: (profileId) => dispatch(fetchProfileWatchList(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyListIndex)
