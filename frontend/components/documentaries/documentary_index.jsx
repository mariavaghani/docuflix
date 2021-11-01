import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDocumentaries, fetchDocumentariesByGenre } from '../../actions/documentary_actions'
import { selectDocumentariesByGenre } from '../../selectors/selectors';
import { DocumentaryIndexItem } from './documentary_index_item';

class DocumentaryIndex extends Component {
  
  render() {
    
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

const mapStateToProps = (state, ownProps) => ({
  documentaries: selectDocumentariesByGenre(state, ownProps.genreId)
  
})

const mapDispatchToProps = (dispatch,ownProps) => ({
  // fetchDocumentariesByGenre: () => dispatch(fetchDocumentariesByGenre(ownProps.genreId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndex)
