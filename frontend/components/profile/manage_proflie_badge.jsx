import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router'
import { withTranslation } from 'react-i18next'


class ManageProfileBadge extends Component {
  constructor(props) {
    super(props)
    this.goToEditProfileForm = this.goToEditProfileForm.bind(this);
  }

  goToEditProfileForm() {
    
    
    this.props.history.replace({
      pathname: "/profiles/manage", 
      state: { editProfileId: this.props.profile.id } 
    });
  }
  render() {
    const { t } = this.props;
    return (
      <div
        className="profile-card overlay-container"
        onClick={this.goToEditProfileForm}
        >
        <div className="overlay-object on-profile-badge on-top">
          <FontAwesomeIcon icon={faEdit} />
        </div>
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
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ManageProfileBadge)))
