import React from 'react'
import { connect } from 'react-redux'

export const VideoPreview = (props) => {
  
  
  return (
    <div className="preview-container div-100">
        <img
          src={props.documentary.thumbnail}
          alt={props.documentary.title}
          className={props.imgClasses}
        />
    
      <video
        className="video-preview div-100 bdr-rad-7-top"
        src={props.documentary.video}
        autoPlay={props.autoplay}
        muted={props.muted}
      >
      </video>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(`state.videoControls.muted: `, state.videoControls.muted);
  console.log(`ownProps.documentary.id: `, ownProps.documentary.id);
  console.log(`state.ui.documentaryInFocus: `, state.ui.documentaryInFocus);
  
  
  
  const muted = (state.videoControls.muted) || (ownProps.documentary.id !== state.ui.documentaryInFocus )
  return ({
    muted: muted,
    autoplay: state.entities.profiles[state.session.selectedProfile].autoplayPreview
  })
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPreview)
