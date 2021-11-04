import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { toggleDocumentaryInfo } from '../../actions/documentary_actions';
import { VideoPreview } from "../ui_elements/video_preview";
import { VideoInfo } from "../ui_elements/video_info";
import { VideoMetadata } from "../ui_elements/video_metadata";
import { selectGenresByDocumentary } from '../../selectors/selectors';
import VideoControlsContainer from "../ui_elements/video_controls";


class DocumentaryInfoAndWatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img"
    }
    this.closeDocumentarySplash = this.closeDocumentarySplash.bind(this);
  }

  componentDidMount() {
    console.log('mounting');
    this.loadingImgTimeout = setTimeout(() => {
        this.setState({ imgClasses: "loading-img hidden" });
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
    console.log('unmounting');
    clearTimeout(this.loadingImgTimeout);
  }
  
  render() {
    console.log(`this.props: `, this.props);
    const { documentary } = this.props;
    return (
      <div className="documentary-info-and-watch" onClick={this.closeDocumentarySplash}>
        <div>
          <button onClick={this.closeDocumentarySplash}>X</button>
          <VideoPreview 
            documentary={documentary}
            imgClasses={this.state.imgClasses}
            containerClass="documentary-preview-info-container"
          />
          <VideoControlsContainer />
          <h1>{documentary.title}</h1>
          <div className="documentary-info">
            <div className="docu-info-col-1">
              <VideoInfo documentary={documentary} />

            </div>
            <div className="docu-info-col-2">
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
  console.log(`selectGenresByDocumentary(state, id): `, selectGenresByDocumentary(state, id));
  
  return {
    genres: selectGenresByDocumentary(state, id),
    documentary: state.entities.documentaries[id]
  }
}

const mapDispatchToProps = (dispatch) => ({
  hideDocumentaryInfo: () => dispatch(toggleDocumentaryInfo())

})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentaryInfoAndWatch))
