import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { fetchUserProfiles } from '../../actions/profiles_actions';
import EditProfileFormContainer from './edit_profile_form';
import ManageProfileBadgeContainer from './manage_proflie_badge';
import WatchProfileBadgeContainer from './watch_profile_badge';

class ProfileIndex extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      editMode: false
    }
  }

  componentDidMount() {
    this.props.fetchUserProfiles(this.props.userId);
  }

  renderManageForm (profile) {
    
    return (
      <ManageProfileBadgeContainer key={profile.id} profile={profile} />
    )
  }

  renderSelectProfileButton(profile) {
    return <WatchProfileBadgeContainer key={profile.id}
      profile={profile}
    />
  }

  render() {

    if (this.props.location.state) return <EditProfileFormContainer 
      profileId={this.props.location.state.editProfileId}/>;
    
    const pageTitle = this.state.editMode ? "Manage Profiles:" : "Who's watching?";
    const buttonText = this.state.editMode ? "Done" : "Manage Profiles";
    return (
      <div className="flex-center-on-page-column fixed-nav div-300h">
        <h2>{pageTitle}</h2>
        <ul className="div-60 profile-index">
          {
          this.props.userProfiles.map(profile => {
            return (
              this.state.editMode ? (this.renderManageForm(profile)) : (this.renderSelectProfileButton(profile)))
            })
          }
        </ul>
        <button 
        onClick={ () => this.setState({ editMode: !this.state.editMode }) }
        className="contact-btn">{buttonText}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    userId: state.session.id,
    userProfiles: Object.values(state.entities.profiles)
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUserProfiles: (userId) => dispatch(fetchUserProfiles(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex);
