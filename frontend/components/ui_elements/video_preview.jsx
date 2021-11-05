import React from 'react'
import { connect } from 'react-redux'

export const VideoPreview = (props) => {
  console.log(`props in video preview: `, props);
  
  return (
      // <div className="preview-wrapper">
        <div className="preview-container">
            <img
              src={props.documentary.thumbnail}
              alt={props.documentary.title}
              className={props.imgClasses}
            />
        
          <video
            className="video-preview"
            src={props.documentary.video}
            autoPlay
            muted={props.muted}
          >
          </video>
        </div>
      //</div>
  )
}

const mapStateToProps = (state) => ({
  muted: state.videoControls.muted
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPreview)
