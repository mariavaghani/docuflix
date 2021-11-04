import React, { Component } from 'react'
import { connect } from 'react-redux'

class VideoControls extends Component {
  render() {
    return (
      <div>
        <button>Play</button>
        <button>+</button>
        <button>Like</button>
        <button>Not for me</button>
        <button>Mute</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoControls)
