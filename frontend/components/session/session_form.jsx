import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.demoUser = {
      email:"demo-user@demo.com",
      password: "123456"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);

  }

  handleInput(type) {
    return (e) => {

      this.setState({ [type]: e.target.value });

    }
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
    return (
      <div className="div-100">

        <ul>
          {
            this.props.errors.map((error, idx) => {
              return (<li key={idx} >{error}</li>)
            })
          }
        </ul>

        <form className="session-form">
          <h4 className="f-24">{this.props.formType}</h4>
          <label>Email</label>
          <input type="text"
            className="user-edit-input"
            value={this.state.email}
            onChange={this.handleInput("email")} />
          


          <label>Password</label>
          <input type="password"
            className="user-edit-input"
            value={this.state.password}
            onChange={this.handleInput("password")} />
          

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