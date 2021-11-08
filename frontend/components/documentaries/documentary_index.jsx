import React, { Component } from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = (state, ownProps) => {
  
  return {documentaries: selectDocumentariesByGenre(state, ownProps.genreId),
  genres: Object.values(state.entities.genres)}
}

const mapDispatchToProps = (dispatch,ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndex)
