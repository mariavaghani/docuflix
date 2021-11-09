import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { fetchDocumentary, toggleDocumentaryInfo } from '../../actions/documentary_actions';
import { selectGenresByDocumentary } from '../../selectors/selectors';
import VideoPreviewContainer from "../ui_elements/video_preview";
import { VideoInfo } from "../ui_elements/video_info";
import { VideoMetadata } from "../ui_elements/video_metadata";
import  VideoControlsContainer  from "../ui_elements/video_controls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { btnColor } from '../../utils/ui_utils';


class DocumentaryPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img div-100 bdr-rad-5-top"
    }
  }
  
  componentDidMount(){
    
    this.props.fetchDocumentary(this.props.documentary.id);
    if (!this.props.loading) {
      this.loadingImgTimeout = setTimeout(() => {
        this.setState({ imgClasses: "loading-img div-100 bdr-rad-5-top hidden"});
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
    
    const { documentary } = this.props;
    return (
            
      <div className="documentary-preview bdr-rad-5"
        onMouseLeave={() => this.props.hideModal()}
        >

        <div>
          <VideoPreviewContainer
            documentary={documentary}
            imgClasses={this.state.imgClasses}
          />
        </div>

        <VideoControlsContainer documentaryId={documentary.id}/>

        <div className="info-row pad-l-10">

          <button className="fa-btn-circle flex-center-on-page-column font-075" onClick={this.goToDocumentarySplash(documentary.id)}>
            <FontAwesomeIcon icon={faChevronDown} size="sm" color={btnColor} />
          </button>
        </div>
      
        <VideoInfo documentary={documentary}/>
        <VideoMetadata genres={this.props.genres}/>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  documentary: state.entities.documentaries[ownProps.documentary.id],
  loading: state.ui.loadingPreview,
  genres: selectGenresByDocumentary(state, ownProps.documentary.id)
})

const mapDispatchToProps = (dispatch) => ({
  fetchDocumentary: (postId) => dispatch(fetchDocumentary(postId)),
  showDocumentaryInfo: () => dispatch(toggleDocumentaryInfo())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentaryPreview))
