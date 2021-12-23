import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { fetchUserProfiles } from '../../actions/profiles_actions';
import CreateNewProfileBadgeContainer from './create_new_profile_badge';
import EditProfileFormContainer from './edit_profile_form';
import CreateProfileFormContainer from './create_profile_container';
import ManageProfileBadgeContainer from './manage_proflie_badge';
import WatchProfileBadgeContainer from './watch_profile_badge';
import { withTranslation } from 'react-i18next';

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

  renderAddProfileButton() {
    return <CreateNewProfileBadgeContainer />
  }

  render() {

    if (this.props.location.state && this.props.location.state.editProfileId) return <EditProfileFormContainer
      profileId={this.props.location.state.editProfileId}/>;

    if (this.props.location.state && this.props.location.state.addNewProfile) return <CreateProfileFormContainer/>;
    const { t } = this.props;
    const pageTitle = this.state.editMode ? "Manage Profiles:" : "Who's watching?";
    const buttonText = this.state.editMode ? "Done" : "Manage Profiles";
    const newProfileForm = this.state.editMode && this.props.userProfiles.length < 5 ? this.renderAddProfileButton() : "";
    return (
      <div className="flex-center-on-page-column pad-t-100 div-300h">
        <h2>{t([pageTitle])}</h2>
        
        <ul className="div-60 profile-index">
          {
          this.props.userProfiles.map(profile => {
            return (
              this.state.editMode ? (this.renderManageForm(profile)) : (this.renderSelectProfileButton(profile)))
            })
          }
          {newProfileForm}
        </ul>
        <button 
        onClick={ () => this.setState({ editMode: !this.state.editMode }) }
        className="contact-btn">{t([buttonText])}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ProfileIndex));
