import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { btnColor } from '../../utils/ui_utils';
import RatingsIndexContainer from './ratings_index';

class ProfileRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRatings: false
    }
  }
  

  render() {
    const profileRatings = this.state.showRatings ? (
      <RatingsIndexContainer profile={this.props.profile}/>
    ) : (
      ""
    )
    const btnAppearance = this.state.showRatings ? ( faChevronUp ) : ( faChevronDown );
    return (
      <li className="ap-card">
        
        <div className="div-flex space-between align-center">
          <div className="div-flex align-center">
            <div className="profile-thumb">
              <img
                src={this.props.profile.avatar}
                alt={this.props.profile.profileName}
              className="profile-avatar bdr-rad-5"
              />
            </div>
            <h6 className="f-18 ml-30">{this.props.profile.profileName}</h6>
          </div>
          <FontAwesomeIcon icon={btnAppearance} size="2x" color={btnColor} onClick={ () => this.setState({ showRatings: !this.state.showRatings})} />
        </div>
        {profileRatings}
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileRatings)
