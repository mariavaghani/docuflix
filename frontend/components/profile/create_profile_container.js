import { connect } from 'react-redux';
import { createUserProfile } from '../../actions/profiles_actions';
import ProfileForm from './profile_form';



const mapStateToProps = (state) => ({
  profile: {
    profileName: "",
    maturitySetting: "NC-17",
    autoplayNextEpisode: true,
    autoplayPreview: true,
    avatar: window.profile1Url,
    userId: state.session.id
  },
  formType: "Create Profile",
  selectedProfile: state.session.selectedProfile
})

const mapDispatchToProps = (dispatch) => ({
  action: (profile) => dispatch(createUserProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
