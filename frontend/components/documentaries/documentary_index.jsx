import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDocumentaries } from '../../actions/documentary_actions'
import { DocumentaryIndexItem } from './documentary_index_item';

class DocumentaryCardIndex extends Component {
  componentDidMount(){
    this.props.fetchDocumentaries();
  }
  render() {
    return (
      <ul>
        {
        this.props.documentaries.map(documentary => {
          return (<DocumentaryIndexItem key={documentary.id}
            documentary={documentary}
            // props={props}
            />)
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  documentaries: Object.values(state.entities.documentaries)
})

const mapDispatchToProps = dispatch => ({
  fetchDocumentaries: () => dispatch(fetchDocumentaries())
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryCardIndex)
