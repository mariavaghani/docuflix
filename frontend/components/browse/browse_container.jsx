import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentaryCardContainer from '../documentaries/documentary_index'

import NavBarContainer from '../nav_bar/nav_bar_container'

export class Browse extends Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <DocumentaryCardContainer />
      </div>
    )
  }
}
// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Browse)
