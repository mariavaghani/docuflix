import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const RatingBtn = (props) => {

  if (!props.rating) return (
    <button
      className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
      onClick={props.onClickUndefined}
    >
      <FontAwesomeIcon icon={props.defaultIcon} color={props.color}/>
    </button>
  )

  switch (props.rating.ratingValue) {

    case true:
      return (
        <button
          className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
          onClick={props.onClickTrue}
        >
          <FontAwesomeIcon icon={props.iconTrue} color={props.color}/>
        </button>
      )
    case false:
      return (
      <button
        className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
        onClick={props.onClickFalse}
      >
        <FontAwesomeIcon icon={props.iconFalse} color={props.color}/>
      </button>)
    default:
      console.log('HITTING DEFAULT CASE');
      
      break;
  }

}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ratingBtn)
