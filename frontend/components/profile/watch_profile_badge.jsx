import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { receiveSelectedProfile } from '../../actions/profiles_actions'

class WatchProfileBadge extends Component {
  constructor(props) {
    super(props)

    this.selectProfileAndGoToBrowse = this.selectProfileAndGoToBrowse.bind(this);
  }


  selectProfileAndGoToBrowse() {
    this.props.selectWatchProfile(this.props.profile.id)
    this.props.history.push({
      pathname: "/browse"
    });
  }

  render() {
    return (
      <div 
        className="profile-card"
        onClick={this.selectProfileAndGoToBrowse}>
        <img
          src={this.props.profile.avatar}
          alt={this.props.profile.profileName}
          className="profile-avatar profile-card"
        />
        {this.props.profile.profileName}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  selectWatchProfile: (profileId) => dispatch(receiveSelectedProfile(profileId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WatchProfileBadge))
