import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router'
import { withTranslation } from 'react-i18next';


class CreateProfileBadge extends Component {
  constructor(props) {
    super(props)
    this.goToAddProfileForm = this.goToAddProfileForm.bind(this);
  }

  goToAddProfileForm() {


    this.props.history.replace({
      pathname: "/profiles/manage",
      state: { addNewProfile: true }
    });
  }
  render() {
    const { t } = this.props;
    return (
      <div
        className="profile-card overlay-container"
        onClick={this.goToAddProfileForm}
      >
        <div className="overlay-object on-profile-badge on-top">
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <div
          
          className="profile-avatar profile-card"
        ></div>
        {t("Add Profile")}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(CreateProfileBadge)))
