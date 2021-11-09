import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchDocumentary, toggleDocumentaryInfo } from '../../actions/documentary_actions';
import VideoPreviewContainer from "../ui_elements/video_preview";
import { VideoInfo } from "../ui_elements/video_info";
import { VideoMetadata } from "../ui_elements/video_metadata";
import { selectGenresByDocumentary } from '../../selectors/selectors';
import VideoControlsContainer from "../ui_elements/video_controls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { btnColor } from '../../utils/ui_utils';


class DocumentaryInfoAndWatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img div-100 bdr-rad-5-top"
    }
    this.closeDocumentarySplash = this.closeDocumentarySplash.bind(this);
    
  }
  
  componentDidMount() {
    
    if (this.props.history.action === "POP") this.props.fetchDocumentary(this.props.documentary.id);
    this.loadingImgTimeout = setTimeout(() => {
      this.setState({ imgClasses: "loading-img div-100 bdr-rad-5-top hidden" });
    }, 3000);
    
  }
  
  closeDocumentarySplash(e) {
    if (e.target !== e.currentTarget)
    return;
    this.props.history.push({
      pathname: "/browse"
    });
    this.props.hideDocumentaryInfo();
  }
  
  
  componentWillUnmount() {
    clearTimeout(this.loadingImgTimeout);
  }
  
  render() {

    const { documentary } = this.props;
    return (
      <div className="documentary-info-and-watch" onClick={this.closeDocumentarySplash}>
        <div className="div-60">
          <div className="overlay-container">

            <button 
              onClick={this.closeDocumentarySplash}
              className="overlay-object on-top-20 in-top-right-corner fa-btn-circle flex-center-on-page-column">
              <FontAwesomeIcon icon={faTimes} size="sm" color={btnColor} onClick={this.closeDocumentarySplash}/>
            </button>
          </div>
          <VideoPreviewContainer
            documentary={documentary}
            imgClasses={this.state.imgClasses}
          />
          <VideoControlsContainer documentaryId={documentary.id}/>
          <h1>{documentary.title}</h1>
          <div className="documentary-info div-100">
            <div>
              <VideoInfo documentary={documentary} />
          <div>{documentary.description}</div>

            </div>
            <div>
              <span>Genres: </span>
              <VideoMetadata genres={this.props.genres} />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, { location }) => {
  const id = parseInt(new URLSearchParams(location.search).get("jbv"));
  
  return {
    genres: selectGenresByDocumentary(state, id),
    documentary: state.entities.documentaries[id],

  }
}

const mapDispatchToProps = (dispatch) => ({
  hideDocumentaryInfo: () => dispatch(toggleDocumentaryInfo()),
  fetchDocumentary: (documentaryId) => dispatch(fetchDocumentary(documentaryId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentaryInfoAndWatch))
