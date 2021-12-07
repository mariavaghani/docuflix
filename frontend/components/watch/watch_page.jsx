import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDocumentary } from '../../actions/documentary_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class WatchPage extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
    this.goToNextDocumentary = this.goToNextDocumentary.bind(this);
  }

  componentDidMount() {
  
    this.props.fetchDocumentary(this.props.match.params.documentaryId)
  }
  
  goBack () {
    this.props.history.goBack()
    
  }

  goToNextDocumentary() {
    
    this.props.history.push({
      pathname: "/browse"
    });
    
  }

  render() {
    const { documentary, muted, autoplay } = this.props;
    if(!documentary) return null;
    
    return (
      <div className="flex-center-on-page-column vh-100 of-hide" >
        <div className="div-100 div-flex just-start-align-center pointer mb-30 ml-30 on-top overlay-object-fixed in-top-left-corner">
          <FontAwesomeIcon icon={faArrowLeft} onClick={this.goBack} size="2x"/>
        </div>
        <video
        className="div-100 vh-100"
        src={documentary.video}
        autoPlay={autoplay}
        muted={muted}
        controls
        onEnded={this.goToNextDocumentary}
      ></video>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  documentary: state.entities.documentaries[ownProps.match.params.documentaryId],
  muted: state.videoControls.muted,
  autoplay: state.entities.profiles[state.session.selectedProfile].autoplayPreview

})

const mapDispatchToProps = (dispatch) => ({
  fetchDocumentary: (documentaryId) => dispatch(fetchDocumentary(documentaryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(WatchPage)
