import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { toggleDocumentaryInfo } from '../../actions/documentary_actions';
import VideoPreviewContainer from "../ui_elements/video_preview";
import { VideoInfo } from "../ui_elements/video_info";
import { VideoMetadata } from "../ui_elements/video_metadata";
import { selectGenresByDocumentary } from '../../selectors/selectors';
import VideoControlsContainer from "../ui_elements/video_controls";


class DocumentaryInfoAndWatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img div-100"
    }
    this.closeDocumentarySplash = this.closeDocumentarySplash.bind(this);
  }

  componentDidMount() {
    this.loadingImgTimeout = setTimeout(() => {
        this.setState({ imgClasses: "loading-img div-100 hidden" });
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
    console.log(`this.props: `, this.props);
    const { documentary } = this.props;
    return (
      <div className="documentary-info-and-watch" onClick={this.closeDocumentarySplash}>
        <div className="div-60">
          <button onClick={this.closeDocumentarySplash}>X</button>
          <VideoPreviewContainer
            documentary={documentary}
            imgClasses={this.state.imgClasses}
          />
          <VideoControlsContainer />
          <h1>{documentary.title}</h1>
          <div className="documentary-info div-100">
            <div>
              <VideoInfo documentary={documentary} />

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
