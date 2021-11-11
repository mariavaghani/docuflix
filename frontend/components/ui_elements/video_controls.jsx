import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleMuteVideo } from '../../actions/video_controls_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlay, faPlus, faThumbsUp, faThumbsDown, faVolumeMute, faVolumeUp, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown } from '@fortawesome/free-regular-svg-icons'
import { withRouter } from 'react-router'
import { btnColor } from '../../utils/ui_utils'
import { addDocumentaryToWatchList, removeDocumentaryFromWatchList } from '../../actions/watch_lists_actions'
import { documentaryInMyList, documentaryRating, getWatchListId } from '../../selectors/selectors'
import { addRatingToDocumentary, updateDocumentaryRating } from '../../actions/rating_actions'

class VideoControls extends Component {

  constructor(props) {
    super(props);

    this.goToWatchPage = this.goToWatchPage.bind(this);
    this.renderRatingBtn = this.renderRatingBtn.bind(this);
  }

  goToWatchPage(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: `watch/${this.props.documentaryId}`,
    });
  }

  renderRatingBtn (defaultIcon, iconTrue, iconFalse, onClickUndefined, onClickTrue, onClickFalse) {
    if (!this.props.rating) return (
      <button
        className="fa-btn-circle flex-center-on-page-column"
        onClick={onClickUndefined}
      >
        <FontAwesomeIcon icon={defaultIcon} />
      </button>
    )

    switch (this.props.rating.ratingValue) {
        
      case true:
        console.log(`this.props.rating.ratingValue ratedUp: `, this.props.rating.ratingValue);
        return (
          <button
            className="fa-btn-circle flex-center-on-page-column"
            onClick={onClickTrue}
          >
            <FontAwesomeIcon icon={iconTrue} />
          </button>
        )
      case false:
        console.log(`this.props.rating.ratingValue ratedDown: `, this.props.rating.ratingValue);
        return (<button
          className="fa-btn-circle flex-center-on-page-column"
          onClick={onClickFalse}
        >
          <FontAwesomeIcon icon={iconFalse} />
        </button>)
      default:
        console.log(`this.props.rating in default: `, this.props.rating);
        
        break;
    }
  }

  


  render() {
    console.log(`this.props.rating: `, this.props.rating);
    
    const myListToggleButton = this.props.inMyList ? (
      <button className="fa-btn-circle flex-center-on-page-column"
        onClick={ () => this.props.removeFromMyList(this.props.watchListId) }>
        <FontAwesomeIcon icon={faCheck} size="lg" color={btnColor} />
      </button>
    ) : (
      <button className="fa-btn-circle flex-center-on-page-column"
          onClick={() => this.props.addToMyList(this.props.selectedProfile, this.props.documentaryId) }>
        <FontAwesomeIcon icon={faPlus} size="lg" color={btnColor} />
      </button>
    )

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

        {myListToggleButton}

        {this.renderRatingBtn(farThumbsUp, faThumbsUp, farThumbsUp,
          () => this.props.rateThumbsUp(this.props.selectedProfile, this.props.documentaryId),
          null, 
          () => this.props.toggleRating(this.props.rating)
        )}

        {this.renderRatingBtn(farThumbsDown, farThumbsDown, faThumbsDown,
          () => this.props.rateThumbsDown(this.props.selectedProfile, this.props.documentaryId),
          () => this.props.toggleRating(this.props.rating),
          null
        )}

        <button className="fa-btn-circle flex-center-on-page-column" onClick={this.props.toggleMute}>
          {muteButtonDisplay}
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  muted: state.videoControls.muted,
  inMyList: documentaryInMyList(ownProps.documentaryId, state.entities.watchLists),
  selectedProfile: state.session.selectedProfile,
  watchListId: getWatchListId(ownProps.documentaryId, state.entities.watchLists),
  rating: documentaryRating(state.entities.ratings, ownProps.documentaryId)
})

const mapDispatchToProps = (dispatch) => ({
  toggleMute: () => dispatch(toggleMuteVideo()),
  addToMyList: (profileId, documentaryId) => dispatch(addDocumentaryToWatchList(profileId, documentaryId)),
  removeFromMyList: (watchListId) => dispatch(removeDocumentaryFromWatchList(watchListId)),
  rateThumbsUp: (profileId, documentaryId) => dispatch(addRatingToDocumentary(profileId, documentaryId, true)),
  rateThumbsDown: (profileId, documentaryId) => dispatch(addRatingToDocumentary(profileId, documentaryId, false)),
  toggleRating: (rating) => dispatch(updateDocumentaryRating(rating, !rating.ratingValue)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoControls))
