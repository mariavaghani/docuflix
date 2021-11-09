import React from 'react'
import { connect } from 'react-redux'

export const VideoInfo = (props) => {
  const { documentary } = props;
  
  return (
    <div className="info-row pad-l-10">
      <span className="maturity-rating">{documentary.maturityRating}</span>
      <span>{documentary.runtimeSize}</span>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(VideoInfo)
