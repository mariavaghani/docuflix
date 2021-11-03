import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DocumentaryPreview extends Component {

  render() {

    if (!this.props.displayModal) return null;
    const { documentary } = this.props;
    return (
      
      <div className="documentary-preview"
        onMouseLeave={() => this.props.hideModal()}
        >
          <img src={documentary.thumbnail} alt={documentary.title} />
          <h1>{documentary.title}</h1>
          <h2>{documentary.maturityRating}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryPreview)
