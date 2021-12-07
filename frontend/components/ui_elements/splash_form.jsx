import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router';

class SplashForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
    this.goToSignup = this.goToSignup.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  goToSignup (e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/signup",
      state: {email: this.state.email}
    });
  }

  handleChangeEmail(e) {
    e.preventDefault();
    this.setState({email: e.target.value })
  }

  render() {
    const labelDisplay = this.state.email.length !== 0 ? (
    <label><h5>Email</h5></label>
    ) : ""
    const changePadding = this.state.email.length !== 0 ? "pad-t-20" : ""
    return (
      <form className="splash-form div-100">
    
        <div className="input-group">
          {labelDisplay}
          <input type='text'
            value={this.state.email}
            onChange={ this.handleChangeEmail }
            className={`input-field-splash div-100 pad-l-20 ${changePadding}`}
            placeholder="Email address"
            />
        </div>
        <button
          className="splash-get-started"
          onClick={this.goToSignup}>
          Get Started
          <span className="fa">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
        </form>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashForm));
