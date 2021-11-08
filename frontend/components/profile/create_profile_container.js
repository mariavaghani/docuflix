import { connect } from 'react-redux';
import { createUserProfile } from '../../actions/profiles_actions';



const mapStateToProps = (state) => ({
  profile: {
    profileName: "",
    maturitySetting: "NC-17",
    autoplayNextEpisode: true,
    autoplayPreview: true,
    avatar: ""
  },
  formType: "Create Profile",
  selectedProfile: state.session.selectedProfile
})

const mapDispatchToProps = (dispatch) => ({
  action: (profile) => dispatch(createUserProfile(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(PForm);
