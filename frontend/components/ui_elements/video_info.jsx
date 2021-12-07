import React from 'react'
import { connect } from 'react-redux'

export const VideoInfo = (props) => {
  const { documentary } = props;
  
  return (
    <div className="info-row pad-l-10 align-center">
      <h5 className="maturity-rating">{documentary.maturityRating}</h5>
      <h5>{documentary.runtimeSize}</h5>
    </div>
  )
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(VideoInfo)
