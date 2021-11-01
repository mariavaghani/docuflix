import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DocumentaryPreview extends Component {

  render() {

    // if (!this.props.show) return null;

    return (
      <div className="documentary-preview"
        onMouseLeave={() => this.props.hideModal()}
        >
        Hi, I am modal
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryPreview)
