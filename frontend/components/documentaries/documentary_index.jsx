import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectDocumentariesByGenre } from '../../selectors/selectors';
import { DocumentaryIndexItem } from './documentary_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { btnColor } from '../../utils/ui_utils';

export class DocumentaryIndex extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { 
      scrolledBy:0
     }

     this.renderNextBtn = this.renderNextBtn.bind(this);
     this.renderPrevBtn = this.renderPrevBtn.bind(this);
  }
  
  scrollForward() {
    this.setState({scrolledBy: this.state.scrolledBy + 40})
    this.myRef.current.scrollBy(40, 0);

  }

  scrollBackward() {
    this.setState({scrolledBy: this.state.scrolledBy - 40})
    this.myRef.current.scrollBy(-40, 0);

  }

  renderNextBtn () {
    if (!this.myRef.current) return null;
    
    const nextBtn = this.myRef.current.scrollWidth >= window.innerWidth && window.innerWidth + this.state.scrolledBy < this.myRef.current.scrollWidth ? (
      <div className="overlay-container on-top-15">
        <button className="scroll-handle-btn overlay-object in-top-right-edge"
          onClick={() => this.scrollForward()}>
            <FontAwesomeIcon icon={faChevronRight} size="lg" color={btnColor} />
          </button>
      </div>
    ) : (
      <div></div>
    )
    return nextBtn;
  }

  renderPrevBtn() {
    const prevBtn = this.state.scrolledBy < 40 ? (
      <div></div>
    ) : (
      <div className="overlay-container on-top-15">
        <button className="scroll-handle-btn overlay-object in-top-left-edge"
          onClick={() => this.scrollBackward()}>
            <FontAwesomeIcon icon={faChevronLeft} size="lg" color={btnColor} />
          </button>
      </div>
    )
    return prevBtn;
  }

  render() {
    if(!this.myRef) return null;
    return (
      <div>
          {this.renderNextBtn()}
          {this.renderPrevBtn()}
          <ul className="docu-carusel of-auto" ref={this.myRef}>
            {
            this.props.documentaries.map(documentary => {
              return (<DocumentaryIndexItem key={documentary.id}
                documentary={documentary}
                scrolledBy={this.state.scrolledBy}
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
  }
}

const mapDispatchToProps = (dispatch,ownProps) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndex)
