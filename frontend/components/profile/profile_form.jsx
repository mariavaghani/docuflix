import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MATURITY_SETTINGS } from '../../utils/profile_utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { DocuflixLogo } from '../ui_elements/docuflix_logo';
import { withTranslation } from 'react-i18next';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.profile;
    this.state.showAvatarOptions = false;
    this.state.avatarModified = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.PROFILE_AVATARS = [window.profileKidsUrl, window.profile1Url, window.profile2Url, window.profile3Url, window.profile4Url]

    this.handleDelete = this.handleDelete.bind(this);
  }

 

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.replace({
      pathname: "/profiles/manage"
    }));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value })
  }

  updateCheckbox(field) {
    return () => {
      this.setState({ [field]: !this.state[field]})
      
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteProfile(this.props.profile.id);
    this.props.history.replace({
      pathname: "/profiles/manage"
    });
  }

  pickAvatar(avatar) {
    
    this.setState({avatar: avatar});
    this.setState({ avatarModified: true })
  }

  render() {
    const { t } = this.props;
    const deleteBtn = (this.props.formType === "Update Profile" && this.props.selectedProfile && this.props.selectedProfile !== this.props.profile.id) ? (
      <button 
        className="contact-btn-muted"
        onClick={this.handleDelete}
      >
        {t("Delete")}
      </button>
    ) : (
      ""
    );

    const imgMenu = this.state.showAvatarOptions ? (
      <FontAwesomeIcon icon={faTimesCircle} />
      ) : (
      <FontAwesomeIcon icon={faEdit} />
    )

    const avatarOptions = this.state.showAvatarOptions ? (
      <div className="overlay-container">
        <ul className="overlay-object div-flex div-600w space-between">
          {
          this.PROFILE_AVATARS.map(avatar => {
        
            return (
            <li key={avatar}>
              <img
                src={avatar}
                alt="Avatar choices here"
                className="profile-avatar profile-card"
                onClick={() => this.pickAvatar(avatar) }
              />
            </li>
              )
            })
          }
        
        </ul>
      </div>
    ) : (
      ""
    )
    
    return (

      <div>
        <nav className="nav-splash">
          <DocuflixLogo logoClass="docuflix-logo"/>
        </nav>
        <form className="flex-center-on-page-column pad-t-100 div-60">
          <ul className="div-flex-column">
            {
            this.props.errors.map(error => {
              return (<li key={error}><h5>{t([error])}</h5></li>)
              })
            }
          </ul>
          <div className="form-card">
            <h3>{t([this.props.formType])}</h3>
          </div>
          <div className="form-body form-card">


            <div
              className="profile-card overlay-container "
            >
              <div className="overlay-object in-lower-corner on-top"
                onClick={() => this.setState({ showAvatarOptions: !this.state.showAvatarOptions })}
              >
                <div className="pointer">{imgMenu}</div>
              </div>
              <img
                src={this.state.avatar}
                alt={t([this.props.profile.profileName])}
                className="profile-avatar profile-card"
              />
              {avatarOptions}
            </div>
            <div>
              <div className="form-card">
                
                  <input type="text"
                    value={this.state.profileName}
                    onChange={this.update("profileName")}
                    className="user-edit-input"
                    />
              
              </div>
              <div className="form-card div-flex-column">
                <h4>{t("Maturity Setting")}</h4>
                  <select
                    value={this.state.maturitySetting}
                    onChange={this.update("maturitySetting")}
                  >
                    {
                    MATURITY_SETTINGS.map(setting => {
                      return (
                      <option key={setting} value={setting}>{t([setting])}</option>
                      )
                    })
                    }
                  </select>
              </div>
              <div className="div-flex-column">
                <h4>{t("Autoplay controls")}</h4>
                <div className="div-flex">
                  <input
                    type="checkbox"
                    checked={this.state.autoplayNextEpisode}
                    onChange={this.updateCheckbox("autoplayNextEpisode")} />
                  <h5>{t("Autoplay next episode in a series")}</h5>
                </div>
                
                <div className="div-flex">
                  <input
                    type="checkbox"
                    checked={this.state.autoplayPreview}
                    onChange={this.updateCheckbox("autoplayPreview")} />
                  <h5>{t("Autoplay previews while browsing in all devices")}</h5>
                </div>
                
              </div>
            </div>
          </div>
          <div className="div-flex space-evenly div-100">
            <input type="submit"
            value={t([this.props.formType])}
              className="contact-btn-muted"
              onClick={this.handleSubmit}
            />
            {deleteBtn}
            <Link to="/profiles/manage" className="contact-btn-muted">{t("Cancel")}</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(withTranslation()(ProfileForm));