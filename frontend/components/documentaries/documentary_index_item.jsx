import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DocumentaryIndexItem extends Component {
  render() {
    
    return (
      <li>
        <img src={this.props.documentary.thumbnail} alt={this.props.documentary.title} />
        <h5>{this.props.documentary.title}</h5>
        <h6>{this.props.documentary.maturityRating}</h6>
      </li>
    )
  }
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryIndexItem)
