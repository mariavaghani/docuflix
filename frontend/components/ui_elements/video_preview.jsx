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
        className="video-preview div-100"
        src={props.documentary.video}
        autoPlay
        muted={props.muted}
      >
      </video>
    </div>
  )
}

const mapStateToProps = (state) => ({
  muted: state.videoControls.muted
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPreview)
