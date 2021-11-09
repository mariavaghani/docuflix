import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleMuteVideo } from '../../actions/video_controls_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlay, faPlus, faThumbsUp, faThumbsDown, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import { btnColor } from '../../utils/ui_utils'

class VideoControls extends Component {

  constructor(props) {
    super(props);

    this.goToWatchPage = this.goToWatchPage.bind(this);
  }

  goToWatchPage(e) {
    e.preventDefault();
    console.log('going to watch page');
    this.props.history.push({
      pathname: `watch/${this.props.documentaryId}`,
    });
  }

  render() {
    
    const muteButtonDisplay = this.props.muted ? (
      <FontAwesomeIcon icon={faVolumeUp} size="lg" color={btnColor}/>
      ) : (
        <FontAwesomeIcon icon={faVolumeMute} size="lg" color={btnColor}/>
      );
    return (
      <div className="div-flex just-start-align-center pad-l-10">
        <button className="fa-btn-circle flex-center-on-page-column font-075" onClick={this.goToWatchPage}>
          <FontAwesomeIcon icon={faPlay} size="sm" color={btnColor}/>
        </button>
        <button className="fa-btn-circle flex-center-on-page-column"><FontAwesomeIcon icon={faPlus} size="lg" color={btnColor}/></button>
        <button className="fa-btn-circle flex-center-on-page-column"><FontAwesomeIcon icon={faThumbsUp} size="sm" color={btnColor}/></button>
        <button className="fa-btn-circle flex-center-on-page-column"><FontAwesomeIcon icon={faThumbsDown} size="sm" color={btnColor}/></button>
        <button className="fa-btn-circle flex-center-on-page-column" onClick={this.props.toggleMute}>
          {muteButtonDisplay}
        </button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoControls))
