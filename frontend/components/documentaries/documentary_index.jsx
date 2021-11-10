import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectDocumentariesByGenre } from '../../selectors/selectors';
import { DocumentaryIndexItem } from './documentary_index_item';

class DocumentaryIndex extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  
  scrollForward() {
    this.myRef.current.scrollBy(100, 100);
    console.log('here');
    
  }
  
  render() {
    return (
      <div>
          <div className="overlay-container on-top-20">
            <button className="scroll-handle-btn overlay-object in-top-right-edge"
              onClick={() => this.scrollForward()}>next</button>
          </div>
          <div className="overlay-container on-top-20">
            <button className="scroll-handle-btn overlay-object in-top-left-edge"
              onClick={() => this.scrollForward()}>prev</button>
          </div>
        <ul className="docu-carusel of-auto overlay-container" ref={this.myRef}>
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
    documentaries: selectDocumentariesByGenre(state, ownProps.genreId),
  // genres: Object.values(state.entities.genres)
  }
}

const mapDispatchToProps = (dispatch,ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndex)
