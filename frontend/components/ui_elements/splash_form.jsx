import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router';

class SplashForm extends Component {
  constructor(props) {
    super(props);
    this.goToSignup = this.goToSignup.bind(this);
  }

  goToSignup (e) {
    e.preventDefault();
    console.log(`this.props: `, this.props);
    this.props.history.push({
      pathname: "/signup"
    });
  }
  render() {
    return (
      <form className="splash-form">
    
        <div className="input-group">
          <label><h5>Email</h5></label>
          <input type='text'
            className="input-field-splash"
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
