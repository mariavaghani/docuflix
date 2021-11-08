import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../../actions/profiles_actions';
import ProfileForm from './profile_form';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.profileId)
    .then(() => this.setState({loaded: true}));
  }

  render() {
    
    if (!this.state.loaded) return null;
    const { action, formType, profile } = this.props;
    
    return (
      <ProfileForm
        action={action}
        formType={formType}
        profile={profile} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.entities.profiles[ownProps.profileId],
  formType: "Update Profile",
  selectedProfile: state.session.selectedProfile

})

const mapDispatchToProps = (dispatch) => ({
  action: (profile) => dispatch(updateUserProfile(profile)),
  fetchUserProfile: (profileId) => dispatch(fetchUserProfile(profileId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);