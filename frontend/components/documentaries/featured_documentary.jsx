import React, { Component } from 'react'
import { connect } from 'react-redux'
import VideoControlsContainer from '../ui_elements/video_controls'
import VideoPreviewContainer from '../ui_elements/video_preview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { btnColor } from '../../utils/ui_utils';
import { VideoInfo } from '../ui_elements/video_info';
import { VideoMetadata } from '../ui_elements/video_metadata';
import { selectGenresByDocumentary } from '../../selectors/selectors';
import { fetchDocumentary, toggleDocumentaryInfo } from '../../actions/documentary_actions';
import { withRouter } from 'react-router';

class FeaturedDocumentary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img div-100 bdr-rad-5-top"
    }
    
  }
  
  componentDidMount() {
    
    // this.props.fetchDocumentary(this.props.documentary.id);
    // this.props.fetchDocumentary(this.props.documentary.id);
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
    return (
      <div className="div-100 bdr-rad-5 on-top fixed-nav">
        <div>
          <VideoPreviewContainer
            documentary={documentary}
            imgClasses={this.state.imgClasses}
          />
        </div>

        <div className="overlay-container div-100 trans-350 on-top-20">
          <div className="overlay-object ">
            <VideoControlsContainer documentaryId={documentary.id} />
            <div className="info-row pad-l-10">
              <button className="fa-btn-circle flex-center-on-page-column font-075" onClick={this.goToDocumentarySplash(documentary.id)}>
                <FontAwesomeIcon icon={faChevronDown} size="sm" color={btnColor} />
              </button>
            </div>
            <VideoInfo documentary={documentary} />
            <VideoMetadata genres={this.props.genres} />
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  documentary: state.entities.featuredDocumentary,
  loading: state.ui.loadingPreview,
  genres: selectGenresByDocumentary(state, ownProps.documentaryId)

})

const mapDispatchToProps = (dispatch) => ({
  // fetchDocumentary: (documentaryId) => dispatch(fetchDocumentary(documentaryId)),
  showDocumentaryInfo: () => dispatch(toggleDocumentaryInfo())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeaturedDocumentary))
