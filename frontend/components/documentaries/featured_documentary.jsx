import React, { Component } from 'react'
import { connect } from 'react-redux'
import VideoControlsExpandedContainer from '../ui_elements/video_controls_expanded'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { btnColor } from '../../utils/ui_utils';
import { VideoInfo } from '../ui_elements/video_info';
import { VideoMetadata } from '../ui_elements/video_metadata';
import { selectGenresByDocumentary } from '../../selectors/selectors';
import { toggleDocumentaryInfo } from '../../actions/documentary_actions';
import { withRouter } from 'react-router';
import VideoPreviewFeaturedContainer from '../ui_elements/video_preview_featured';

class FeaturedDocumentary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img div-100 bdr-rad-5-top",
      muted: this.props.globalMute,
    }
    
  }


  componentDidMount() {
    
    if (!this.props.loading) {
      this.loadingImgTimeout = setTimeout(() => {
        this.setState({ imgClasses: "loading-img div-100 bdr-rad-5-top hidden" });
      }, 3000);
    };
    
  }


componentWillUnmount() {
    clearTimeout(this.loadingImgTimeout);
  }
  
  goToDocumentarySplash(id) {
    return (e) => {
      this.props.history.push({
        pathname: "/browse",
        search: `jbv=${id}`
      });
      this.props.showDocumentaryInfo();
    }
  }
  
  render() {
    
    const documentary = this.props.documentary;
    if (!documentary) return null;
    if (!documentary.id) return null;
    return (
      <div className="div-100 bdr-rad-5 on-top">
          <div className='gradient-overlay-featured'>
          </div>
              <VideoPreviewFeaturedContainer
                documentary={documentary}
                imgClasses={this.state.imgClasses}
                muted={this.props.muted}
              />

        <div className="overlay-container div-100 trans-350 on-top-20">
          <div className="overlay-object div-100">
            <VideoControlsExpandedContainer documentaryId={documentary.id} />
            <div className="info-row m-lr-70">
              <button className="fa-btn-circle fa-btn-lg flex-center-on-page-column font-075" onClick={this.goToDocumentarySplash(documentary.id)}>
                <FontAwesomeIcon icon={faChevronDown} size="sm" color={btnColor} />
              </button>
            </div>
            <div className="m-lr-70">
              <VideoInfo documentary={documentary} />
              <VideoMetadata genres={this.props.genres} />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const muteDocu = state.ui.muteFeatured ? true : state.videoControls.muted;
  return {
    documentary: state.entities.featuredDocumentary,
    loading: state.ui.loadingPreview,
    genres: selectGenresByDocumentary(state, ownProps.documentaryId),
    muted: muteDocu

  }

}

const mapDispatchToProps = (dispatch) => ({
  showDocumentaryInfo: () => dispatch(toggleDocumentaryInfo()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeaturedDocumentary))
