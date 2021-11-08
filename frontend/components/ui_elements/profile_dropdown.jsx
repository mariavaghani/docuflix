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
    return (
    
      <div className="drpdwn-container ">
        <button className={"drpdwn-btn " + btnClass}>
          {this.props.selectedProfile.profileName}
        </button>
        <div className={"dropdown-list " + dropClass}>
          <ul>

              {
              this.props.userProfiles.map(profile => {
                return (<li 
                  onClick={ () => this.props.selectWatchProfile(profile.id) }
                  key={profile.id}>{profile.profileName}</li>)
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
            <li>
              <button
                onClick={this.handleLogout}
                className="docuflix-btn"
              >
                Logout
              </button>
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
