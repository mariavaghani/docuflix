import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { sortErrors } from '../../selectors/users_selectors';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    const preFilledEmail = this.props.location.state ? (this.props.location.state.email) : ( "" );
    this.state = {
      email: preFilledEmail,
      password: ''
    }

    this.demoUser = {
      email:"demo-user@demo.com",
      password: "123456"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.renderFieldLabel = this.renderFieldLabel.bind(this);
  }

  handleInput(type) {
    return (e) => {

      this.setState({ [type]: e.target.value });

    }
  }

  renderFieldLabel(type) {
    const titleCapital = type[0].toUpperCase() + type.substring(1);
    const display = this.state[type].length !== 0 ? (
      <label>
        <h5 className="muted-txt-clr">{titleCapital}</h5>
      </label>
    ) : ""

    return display;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then((e) => this.props.history.push({ pathname: "/browse" }));
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.loginAsDemo(this.demoUser)
      .then((e) => this.props.history.push({ pathname: "/browse" }));
  }

  render() {
    const { emailErrors, passwordErrors, sessionErrors } = sortErrors(this.props.errors);
    const emailErrorStyle = emailErrors.length > 0 ? "in-error-state" : "";
    const passwordErrorStyle = passwordErrors.length > 0 ? "in-error-state" : "";
    const sessionErrorStyle = sessionErrors.length > 0 ? "" : "hidden";
    
    
    return (
      <div className="div-100">
        <form className="session-form">
          <h4 className="f-24">{this.props.formType}</h4>

        <ul className={"session-errors-display mt-10 mb-30 bdr-rad-5 pad-10 " + sessionErrorStyle}>
          {
            sessionErrors.map((error, idx) => {
              return (<li key={idx} >{error}</li>)
            })
          }
        </ul>

          <div className="input-group div-100">
            {this.renderFieldLabel("email")}
            <input type="text"
              className={"user-edit-input div-100 bdr-rad-5 " + emailErrorStyle}
              value={this.state.email}
              onChange={this.handleInput("email")}
              placeholder="Email address" />
          </div>
              <ul className="errors-display mt-10">
                {
                  emailErrors.map((error, idx) => {
                    return (<li key={idx} >{error}</li>)
                  })
                }
              </ul>
          
          <div className="input-group div-100 mt-30">
            {this.renderFieldLabel("password")}
            <input type="password"
              className={"user-edit-input div-100 bdr-rad-5 " + passwordErrorStyle}
              value={this.state.password}
              onChange={this.handleInput("password")}
              placeholder="Password" />
          </div>
              <ul className="errors-display mt-10">
                {
                  passwordErrors.map((error, idx) => {
                    return (<li key={idx} >{error}</li>)
                  })
                }
              </ul>
          

          <button onClick={this.handleSubmit} className="docuflix-btn form-ele">
            {this.props.formType}
          </button>
          <button onClick={this.handleDemoSubmit} className="docuflix-btn form-ele">
            Login as Demo User
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);