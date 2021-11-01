import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DocumentaryPreview } from '../modals/documentary_preview'
import { DocumentaryIndexCard } from './documentary_index_card'

export class DocumentaryIndexItem extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }

  render() {

    const modalDisplay = this.state.showModal ?
      (
        <DocumentaryPreview 
          hideModal={() => this.setState({ showModal: false })}
        />
      ) : (
        ""
      );
    
    return (
      <li>
        {modalDisplay}

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
