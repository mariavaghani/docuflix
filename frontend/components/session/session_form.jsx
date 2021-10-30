import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

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

  render() {
    return (
      <div className="session-form">

        <h2>{this.props.formType}</h2>
        <Link className="btn" to={this.props.sessionPath}>{this.props.btnContent}</Link>

        <ul>
          {
            this.props.errors.map((error, idx) => {
              return (<li key={idx} >{error}</li>)
            })
          }
        </ul>

        <form>

          <label>Email</label>
          <input type="text"
            value={this.state.email}
            onChange={this.handleInput("email")} />
          


          <label>Password</label>
          <input type="password"
            value={this.state.password}
            onChange={this.handleInput("password")} />
          

          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    )
  }
}

export default SessionForm;