import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectAllDocumentaries, selectDocumentariesByGenre } from '../../selectors/selectors';
import { DocumentaryIndexItem } from '../documentaries/documentary_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { btnColor } from '../../utils/ui_utils';
import { updateTitles } from '../../actions/filter_actions';

class SearchResults extends Component {
  constructor(props) {
    super(props);

  }



  

  render() {
    // if (!this.props.documentaries) return null;
    return (
      <div>
        <ul className="docu-carusel fixed-nav flex-wrap mb-40-children mt-80">
          {
            this.props.documentaries.map(documentary => {
              return (<DocumentaryIndexItem key={documentary.id}
                documentary={documentary}
                
              />)
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    documentaries: selectAllDocumentaries(state.entities.documentaries),
    // documentaries
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
