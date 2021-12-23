import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { fetchUserProfile, receiveSelectedProfile } from '../../actions/profiles_actions'

class WatchProfileBadge extends Component {
  constructor(props) {
    super(props)

    this.selectProfileAndGoToBrowse = this.selectProfileAndGoToBrowse.bind(this);
  }


  selectProfileAndGoToBrowse() {
    this.props.selectWatchProfile(this.props.profile.id)
    
    const nexturl = this.props.match.url === "/profiles/manage" || this.props.location.pathname === "/search" ? (
      "/browse"
    ) : (
      this.props.match.url
    )
    this.props.fetchUserProfile(this.props.profile.id)
    .then( () => this.props.history.replace({
      pathname: nexturl
    })
    )
  }

  render() {
    const { t } = this.props;
    return (
      <div 
        className="profile-card"
        onClick={this.selectProfileAndGoToBrowse}>
        <img
          src={this.props.profile.avatar}
          alt={t([this.props.profile.profileName])}
          className="profile-avatar profile-card"
        />
        {t([this.props.profile.profileName])}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  selectWatchProfile: (profileId) => dispatch(receiveSelectedProfile(profileId)),
  fetchUserProfile: (profileId) => dispatch(fetchUserProfile(profileId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(WatchProfileBadge)))
