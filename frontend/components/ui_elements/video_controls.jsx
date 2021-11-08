import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleMuteVideo } from '../../actions/video_controls_actions'

class VideoControls extends Component {

  
  render() {
    const muteButtonDisplay = this.props.muted ? (
      "Unmute"
      ) : (
        "Mute"
      );
    return (
      <div>
        <button className="docuflix-btn">Play</button>
        <button className="docuflix-btn">+</button>
        <button className="docuflix-btn">Like</button>
        <button className="docuflix-btn">Not for me</button>
        <button className="docuflix-btn" onClick={this.props.toggleMute}>{muteButtonDisplay}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  muted: state.videoControls.muted
})

const mapDispatchToProps = (dispatch) => ({
  toggleMute: () => dispatch(toggleMuteVideo())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoControls)