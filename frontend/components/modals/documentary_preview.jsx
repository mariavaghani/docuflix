import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { fetchDocumentary, toggleDocumentaryInfo } from '../../actions/documentary_actions';
import { selectGenresByDocumentary } from '../../selectors/selectors';
import { VideoPreview } from "../ui_elements/video_preview";
import { VideoInfo } from "../ui_elements/video_info";
import { VideoMetadata } from "../ui_elements/video_metadata";
import  VideoControlsContainer  from "../ui_elements/video_controls";


class DocumentaryPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgClasses: "loading-img"
    }
  }
  
  componentDidMount(){
    
    this.props.fetchDocumentary(this.props.documentary.id);
    if (!this.props.loading) {
      this.loadingImgTimeout = setTimeout(() => {
        this.setState({imgClasses: "loading-img hidden"});
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
            
      <div className="documentary-preview"
        onMouseLeave={() => this.props.hideModal()}
      >
        <VideoPreview documentary={documentary} imgClasses={this.state.imgClasses}/>
        <VideoControlsContainer />
        <h1>{documentary.title}</h1>
        <div className="info-row">
          <button onClick={this.goToDocumentarySplash(documentary.id)}>More Info</button>
        </div>
      
        <VideoInfo documentary={documentary}/>
        <VideoMetadata genres={this.props.genres}/>

        <div className="info-row">
          <ul className="genre-docu-preview">
            {
            this.props.genres.map(genre => {
              return (<li key={genre.id}>{genre.genre}</li>)
              })
            }
          </ul>
        </div>
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
