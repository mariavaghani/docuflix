import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { receiveSelectedProfile, switchUserProfile } from '../../actions/profiles_actions';
import { logout } from "../../actions/session_actions";
import { selectAllUserProfilesWithoutSelected } from '../../selectors/selectors';
import { withTranslation } from 'react-i18next';



class ProfileDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    // this.state = {
    //   language: props.i18n.language
    // }

  }

  handleLogout() {

    this.props.logout()
      .then((e) => this.props.history.push({ pathname: "/" }));
  }

  changeLanguage(lang) {
    
    const { i18n } = this.props;
    localStorage.setItem('docuflixLang', lang);
    i18n.changeLanguage(lang);
  }

  renderlanguageSwitcher () {
    switch (this.props.i18n.language) {
      case "en":
        return (
          <li onClick={() => this.changeLanguage("rus") }>
            Русский
          </li>
        );
      case "rus":
        return (
          <li onClick={() => this.changeLanguage("en") }>
            Switch to English
          </li>
        );
      default:
        console.log('Language is not supported');
        ;
    }
  }
  

  render() {
    const { t } = this.props;
    const btnClass = this.props.btnClass;
    const dropClass = this.props.dropClass;
    if (!this.props.selectedProfile) return null;
    const { selectedProfile } = this.props;
    return (
    
      <div className="drpdwn-container ">
        <div className="profile-micro-thumb">
          <img
            src={selectedProfile.avatar}
            alt={t([selectedProfile.profileName])}
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
                          alt={t([profile.profileName])}
                          className="profile-avatar bdr-rad-5"
                        />
                      </div>
                      {t([profile.profileName])}
                  </li>
                )
                })
              }
          </ul>

          <ul>
            <li>
              <Link to="/YourAccount">{ t("Account") }</Link>
            </li>
            <li>
              <Link to="/profiles/manage">{ t("Manage Profiles") }</Link>
            </li>
            {this.renderlanguageSwitcher()}
            <li onClick={this.handleLogout}>
              
                <h5>{ t("Sign out of Docuflix") }</h5>
              
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ProfileDropdown)))
