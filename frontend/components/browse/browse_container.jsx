import React, { Component } from 'react'
import { connect } from 'react-redux'
import GenreIndexContainer from '../genres/genre_index'

export class Browse extends Component {
  render() {
    return (
      <div>
        <GenreIndexContainer />
      </div>
    )
  }
}
// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Browse)
