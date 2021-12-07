import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RatingBtn } from '../ui_elements/rating_btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTimes, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown } from '@fortawesome/free-regular-svg-icons'
import { addRatingToDocumentary, deleteRatingFromDocumentary, updateDocumentaryRating } from '../../actions/rating_actions';


class RatingsControlItem extends Component {

  
  
  render() {
    
    
    return (
      <div className="ap-card div-80 div-flex space-between align-center">
        <h6>{this.props.rating.documentary.title}</h6>
        <div className="div-flex">
          <RatingBtn rating={this.props.rating}
            color={"black"}
            defaultIcon={farThumbsUp}
            iconTrue={faThumbsUp}
            iconFalse={farThumbsUp}
            onClickUndefined={() => this.props.rateThumbsUp(this.props.profile.id, this.props.documentaryId)}
            onClickTrue={null}
            onClickFalse={() => this.props.toggleRating(this.props.rating)} />
          <RatingBtn rating={this.props.rating}
            color={"black"}
            defaultIcon={farThumbsDown}
            iconTrue={farThumbsDown}
            iconFalse={faThumbsDown}
            onClickUndefined={() => this.props.rateThumbsDown(this.props.profile.id, this.props.documentaryId)}
            onClickTrue={() => this.props.toggleRating(this.props.rating)}
            onClickFalse={null} />
          <button
            className="fa-btn-circle fa-btn-lg flex-center-on-page-column"
            onClick={ () => this.props.removeRating(this.props.rating.id) }
          >
            <FontAwesomeIcon icon={faTimes} color="black"/>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  rateThumbsUp: (profileId, documentaryId) => dispatch(addRatingToDocumentary(profileId, documentaryId, true)),
  rateThumbsDown: (profileId, documentaryId) => dispatch(addRatingToDocumentary(profileId, documentaryId, false)),
  toggleRating: (rating) => dispatch(updateDocumentaryRating(rating, !rating.ratingValue)),
  removeRating: (ratingId) => dispatch(deleteRatingFromDocumentary(ratingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RatingsControlItem)
