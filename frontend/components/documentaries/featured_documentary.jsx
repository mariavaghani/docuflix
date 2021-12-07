import React, { Component } from 'react'
import { connect } from 'react-redux'
import VideoControlsExpandedContainer from '../ui_elements/video_controls_expanded'
import VideoPreviewContainer from '../ui_elements/video_preview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { btnColor } from '../../utils/ui_utils';
import { VideoInfo } from '../ui_elements/video_info';
import { VideoMetadata } from '../ui_elements/video_metadata';
import { selectGenresByDocumentary } from '../../selectors/selectors';
import { fetchDocumentary, toggleDocumentaryInfo } from '../../actions/documentary_actions';
import { withRouter } from 'react-router';
import { settingDocumentaryInFocus } from '../../actions/video_controls_actions';
import VideoPreviewFeaturedContainer from '../ui_elements/video_preview_featured';

class FeaturedDocumentary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img div-100 bdr-rad-5-top",
      muted: this.props.globalMute,
      paused: false
    }
    
    this.handleScroll = this.handleScroll.bind(this);
  }



  handleScroll(e) {
    if (window.scrollY < 200 ) this.setState({ muted: this.props.globalMute })
    if (window.scrollY > 200 && window.scrollY < 300) this.setState({ muted: true })

  }


  componentDidMount() {
    
    window.addEventListener('scroll', this.handleScroll);
    if (!this.props.loading) {
      this.loadingImgTimeout = setTimeout(() => {
        this.setState({ imgClasses: "loading-img div-100 bdr-rad-5-top hidden" });
      }, 3000);
    };
    
  }


componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearTimeout(this.loadingImgTimeout);
  }
  
  goToDocumentarySplash(id) {
    return (e) => {
      this.setState({muted: true})
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
    // if (this.props.currDocumentaryInFocus === null || this.props.currDocumentaryInFocus === undefined) {
    //   this.props.setInFocus(this.props.documentary.id);
    // }
    return (
      <div className="div-100 bdr-rad-5 on-top">
          <div className='gradient-overlay-featured'>
          </div>
              <VideoPreviewFeaturedContainer
                documentary={documentary}
                imgClasses={this.state.imgClasses}
                muted={this.state.muted}
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

const mapStateToProps = (state, ownProps) => ({
  documentary: state.entities.featuredDocumentary,
  loading: state.ui.loadingPreview,
  genres: selectGenresByDocumentary(state, ownProps.documentaryId),
  globalMute: state.videoControls.muted
  // currDocumentaryInFocus: state.ui.documentaryInFocus

})

const mapDispatchToProps = (dispatch) => ({
  // fetchDocumentary: (documentaryId) => dispatch(fetchDocumentary(documentaryId)),
  showDocumentaryInfo: () => dispatch(toggleDocumentaryInfo()),
  // setInFocus: (id) => dispatch(settingDocumentaryInFocus(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeaturedDocumentary))
