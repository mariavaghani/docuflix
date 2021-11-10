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
        <DocumentaryPreviewContainer
          hideModal={() => this.setState({ showModal: false })}
          documentary={this.props.documentary}
          scrolledBy={this.props.scrolledBy}
        />
      ) : ""

    
    return (
      <li>
        {displayModal}
        
                <DocumentaryIndexCard
        documentary={this.props.documentary}
        showModal={ () => this.setState({ showModal: true }) }
        
          />
      </li>
    )
  }
}


// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndexItem)
