import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import { updateUser } from '../../actions/session_actions';

class UpdateUserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      email: props.user.email
    }

    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateEmail(e) {
    e.preventDefault();
    this.setState({email: e.target.value})
  }

  updateUserInfo(e) {
    e.preventDefault();
    const nextUserState = this.props.user;
    nextUserState.email = this.state.email;
    this.props.updateUser(nextUserState);
    this.setState({ editMode: false })
  }

  render() {
    const { t } = this.props;
    const fieldEditDisplay = this.state.editMode ? (
      <div className="ap-inner-grid">
        <input type="text"
          value={this.state.email}
          onChange={this.updateEmail}
          className="div-60 user-edit-input"/>
        <div 
          className="contact-btn-muted"
          onClick={this.updateUserInfo}>
          {t("Save Changes")}
        </div>
        <div 
          className="contact-btn-muted"
          onClick={() => this.setState({ editMode: false })}>
          X
        </div>
      </div>
    ) : (
      <div className="ap-inner-grid">
        <h5>{this.props.user.email}</h5>
        <div 
          className="contact-btn-muted"
          onClick={() => this.setState({editMode: true})}>
          {t("Change email")}
        </div>
      </div>
    )

    return (
      <div>
        {fieldEditDisplay}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {

  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(UpdateUserInfo))
