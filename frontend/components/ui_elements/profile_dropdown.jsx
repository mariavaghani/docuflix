import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { receiveSelectedProfile, switchUserProfile } from '../../actions/profiles_actions';
import { logout } from "../../actions/session_actions";
import { selectAllUserProfilesWithoutSelected } from '../../selectors/selectors';

class ProfileDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogout() {

    this.props.logout()
      .then((e) => this.props.history.push({ pathname: "/" }));
  }
  

  render() {
    const btnClass = this.props.btnClass;
    const dropClass = this.props.dropClass;
    if (!this.props.selectedProfile) return null;
    const { selectedProfile } = this.props;
    return (
    
      <div className="drpdwn-container ">
        <div className="profile-micro-thumb">
          <img
            src={selectedProfile.avatar}
            alt={selectedProfile.profileName}
            className="profile-avatar bdr-rad-5"
          />
        </div>
        <div className={"dropdown-list " + dropClass}>
          <ul>

              {
              this.props.userProfiles.map(profile => {
                return (
                  <li 
                    onClick={ () => this.props.selectWatchProfile(profile.id) }
                    key={profile.id}
                    className="div-flex align-center space-between">
                      <div className="profile-micro-thumb">
                        <img
                          src={profile.avatar}
                          alt={profile.profileName}
                          className="profile-avatar bdr-rad-5"
                        />
                      </div>
                      {profile.profileName}
                  </li>
                )
                })
              }
          </ul>

          <ul>
            <li>
              <Link to="/YourAccount">Account</Link>
            </li>
            <li>
              <Link to="/profiles/manage">Manage Profiles</Link>
            </li>
            <li onClick={this.handleLogout}>
              
                <h5>Sign out of Docuflix</h5>
              
            </li>
          </ul>
        </div>
      </div>
    
    )
    
  }
}


const mapStateToProps = (state) => ({
  userProfiles: selectAllUserProfilesWithoutSelected(state.entities.profiles, state.session.selectedProfile),
  selectedProfile: state.entities.profiles[state.session.selectedProfile]

})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  selectWatchProfile: (profileId, userProfileFilters) => dispatch(switchUserProfile(profileId, userProfileFilters))

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown))
