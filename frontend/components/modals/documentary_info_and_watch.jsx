import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchDocumentary, toggleDocumentaryInfo } from '../../actions/documentary_actions';
import VideoPreviewContainer from "../ui_elements/video_preview";
import { VideoInfo } from "../ui_elements/video_info";
import { VideoMetadata } from "../ui_elements/video_metadata";
import { selectGenresByDocumentary } from '../../selectors/selectors';
import VideoControlsExpandedContainer from "../ui_elements/video_controls_expanded";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { btnColor } from '../../utils/ui_utils';
import { removingDocumentaryInFocus, settingDocumentaryInFocus } from '../../actions/video_controls_actions';


class DocumentaryInfoAndWatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img div-100 bdr-rad-5-top"
    }
    this.closeDocumentarySplash = this.closeDocumentarySplash.bind(this);
    
  }
  
  componentDidMount() {
    
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
    // this.props.removeFocus();
  }
  
  
  componentWillUnmount() {
    clearTimeout(this.loadingImgTimeout);
  }
  
  render() {

    const { documentary } = this.props;
    console.log(`documentary: `, documentary);
    
    return (
      <div className="documentary-info-and-watch " onClick={this.closeDocumentarySplash}>
        <div className="div-60 modal-scroll of-auto">
          <div className="overlay-container">

            <button 
              onClick={this.closeDocumentarySplash}
              className="overlay-object on-top-20 in-top-right-corner fa-btn-circle fa-btn-lg flex-center-on-page-column">
              <FontAwesomeIcon icon={faTimes} size="sm" color={btnColor} onClick={this.closeDocumentarySplash}/>
            </button>
          </div>
          <div className="gradient-overlay-modal"></div>
          <VideoPreviewContainer
            documentary={documentary}
            imgClasses={this.state.imgClasses}
          />
          <div className="overlay-container div-100 trans-100 on-top-20">
            <div className="overlay-object div-100">
              <VideoControlsExpandedContainer documentaryId={documentary.id}/>

            </div>
          </div>
            <div className="pad-lrb-30">
              <h1>{documentary.title}</h1>
              <div className="documentary-info div-100">
                <div>
                  <VideoInfo documentary={documentary} />
                  <div><p>{documentary.description}</p></div>
                </div>
                <div>
                  <span className="muted-txt-clr">Genres: </span>
                  <VideoMetadata genres={this.props.genres} />
                </div>
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
  fetchDocumentary: (documentaryId) => dispatch(fetchDocumentary(documentaryId)),
  // setInFocus: (id) => dispatch(settingDocumentaryInFocus(id)),
  // removeFocus: () => dispatch(removingDocumentaryInFocus())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentaryInfoAndWatch))
