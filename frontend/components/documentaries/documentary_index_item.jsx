import React, { Component } from 'react'
import DocumentaryPreviewContainer from '../modals/documentary_preview'
import { DocumentaryIndexCard } from './documentary_index_card'

export class DocumentaryIndexItem extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  render() {

    const displayModal = this.state.showModal ?
      (
        <div className="documentary-preview bdr-rad-7 on-top"
        style={{transform: `translate(-${this.props.scrolledBy+50}px, 0px)`}}
        >
          <DocumentaryPreviewContainer
            documentary={this.props.documentary}
          />
        </div>
      ) : ""

    
    return (
      <li
        onMouseOver={ () => this.setState({ showModal: true }) }
        onMouseLeave={() => this.setState({ showModal: false })}
      >
        {displayModal}
        <div>
        <DocumentaryIndexCard
          documentary={this.props.documentary}
            />
        </div>
      </li>
    )
  }
}


// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndexItem)
