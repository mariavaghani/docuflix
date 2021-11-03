import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDocumentary } from '../../actions/documentary_actions';
import { selectGenresByDocumentary } from '../../selectors/selectors';

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
      }, 2000);
    };
    
  }

  componentWillUnmount() {
    clearTimeout(this.loadingImgTimeout);
  }

  render() {
    
    const { documentary } = this.props;
    return (
            
      <div className="documentary-preview"
        // onMouseLeave={() => this.props.hideModal()}
        >

        <img 
          src={documentary.thumbnail} 
          alt={documentary.title}
          className={this.state.imgClasses}
        />

        <video src={documentary.video}
          autoPlay
          muted
        >
        </video>

        <h1>{documentary.title}</h1>
        <div className="info-row">
          <span className="maturity-rating">{documentary.maturityRating}</span>
          <span>{documentary.runtimeSize}</span>
        </div>

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
  loading: state.ui.loading.loadingPreview,
  genres: selectGenresByDocumentary(state, ownProps.documentary.id)
})

const mapDispatchToProps = (dispatch) => ({
  fetchDocumentary: (postId) => dispatch(fetchDocumentary(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentaryPreview)
